import React from 'react';
import PropTypes from 'prop-types';
import renderIf from 'render-if';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import { getUserListBasedOnType, addNewUserListBasedOnType, addGameToExistingListBasedOnType } from 'actions/collections';
import { closeAddGameDialog } from 'actions/dialogs';
import { COLLECTION, WISHLIST } from 'constants/collections';
import List, { ListItem } from 'material-ui/List';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import blue from 'material-ui/colors/blue';
import { addMessageToSnackbarQueue } from 'actions';
import selector from './addgame.selector';
import { AddNewListButton, UserListItem, EmptyListText } from './addgame.components';

const styles = {
  avatar: {
    background: blue[100],
    color: blue[600],
  },
};
const TYPES = [COLLECTION, WISHLIST];

class AddGameDialog extends React.Component {
  state = {
    newListName: '',
  }
  componentDidMount() {
    const { userId, getUserList, dialogType } = this.props;
    getUserList(userId, dialogType);
  }
  componentWillReceiveProps(nextProps) {
    const { userId: newUserId, dialogType: newDialogType } = nextProps;
    const { userId: oldUserId, dialogType: oldDialogType } = this.props;
    if ((newUserId && newUserId !== oldUserId)
    || (newDialogType && newDialogType !== oldDialogType)) {
      this.props.getUserList(newUserId, newDialogType);
    }
  }
  handleClose = () => {
    this.setState({
      newListName: '',
    });
    this.props.closeDialog(this.props.selectedValue);
  };
  handleListNameChange = (evt) => {
    this.setState({
      newListName: evt.target.value,
    });
  }
  handleListItemClick = (collection) => {
    const { addGameToExistingList, gameId, closeDialog, dialogType } = this.props;
    addGameToExistingList(collection.id, gameId, dialogType)
    .then(() => closeDialog());
  };
  handleAddButtonClick = () => {
    const { addGameToNewList, dialogType, userId, gameId } = this.props;
    const { newListName } = this.state;
    if (!newListName) {
      return;
    }
    addGameToNewList(newListName, userId, gameId, dialogType)
    .then(() => this.props.showMessage('Game added successfully'))
    .then(this.handleClose);
  }
  render() {
    const { classes, selectedValue, open, userList, dialogType } = this.props;
    const { newListName } = this.state;
    if (!open) {
      return null;
    }
    const renderIfNoListItems = renderIf(!userList || userList.length === 0);
    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={open} onBackdropClick={this.handleClose}>
        <DialogTitle id="simple-dialog-title">Add game to {dialogType}</DialogTitle>
        <div>
          <List>
            {userList && userList.map(listItem => (
              <UserListItem
                avatarClassName={classes.avatar}
                handleItemClick={() => this.handleListItemClick(listItem)}
                key={listItem.id}
                collection={listItem}
              />
            ))}
            {renderIfNoListItems(() => <EmptyListText dialogType={dialogType} />)}
            <Divider />
            <ListItem><TextField label={'Name'} value={newListName} onChange={this.handleListNameChange} /></ListItem>
            <AddNewListButton
              onTouchTap={this.handleAddButtonClick}
              listType={dialogType}
            />
          </List>
        </div>
      </Dialog>
    );
  }
}

AddGameDialog.propTypes = {
  classes: PropTypes.shape().isRequired,
  selectedValue: PropTypes.string,
  open: PropTypes.bool.isRequired,
  userList: PropTypes.arrayOf(PropTypes.shape()),
  dialogType: PropTypes.oneOf(TYPES),
  getUserList: PropTypes.func.isRequired,
  showMessage: PropTypes.func.isRequired,
  userId: PropTypes.number,
  gameId: PropTypes.number,
  addGameToNewList: PropTypes.func.isRequired,
  addGameToExistingList: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
};

AddGameDialog.defaultProps = {
  userList: [],
  userId: null,
  gameId: null,
};
const mapStateToProps = state => selector(state);
const mapDispatchToProps = dispatch => ({
  getUserList: (userId, listType) => dispatch(getUserListBasedOnType(userId, listType)),
  addGameToNewList: (collectionName, userId, gameId, listType) =>
    dispatch(addNewUserListBasedOnType(collectionName, userId, gameId, listType)),
  addGameToExistingList: (collectionId, gameId, listType) =>
    dispatch(addGameToExistingListBasedOnType(collectionId, gameId, listType)),
  closeDialog: () => dispatch(closeAddGameDialog()),
  showMessage: message => dispatch(addMessageToSnackbarQueue(message)),
});
const connectHOC = connect(mapStateToProps, mapDispatchToProps);
const withStylesHOC = withStyles(styles);
export default compose(connectHOC, withStylesHOC)(AddGameDialog);
