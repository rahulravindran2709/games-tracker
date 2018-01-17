import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import { getUserCollections, getUserWishlists, addGameToCollection } from 'actions/collections';
import { closeAddGameDialog } from 'actions/dialogs';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import PersonIcon from 'material-ui-icons/Person';
import AddIcon from 'material-ui-icons/Add';
import blue from 'material-ui/colors/blue';
import selector from './addgame.selector';

const styles = {
  avatar: {
    background: blue[100],
    color: blue[600],
  },
};

const AddNewCollectionButton = ({ onTouchTap }) => (
  <ListItem button onClick={onTouchTap}>
    <ListItemAvatar>
      <Avatar>
        <AddIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Add new collection" />
  </ListItem>);

AddNewCollectionButton.propTypes = {
  onTouchTap: PropTypes.func.isRequired,
};


const UserListItem = ({ collection, avatarClassName, handleItemClick }) => (
  <ListItem
    button
    onClick={handleItemClick}
    key={collection.id}
  >
    <ListItemAvatar>
      <Avatar className={avatarClassName}>
        <PersonIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={collection.name} />
  </ListItem>);

UserListItem.propTypes = {
  collection: PropTypes.shape(),
  avatarClassName: PropTypes.string.isRequired,
  handleItemClick: PropTypes.func,
};
UserListItem.defaultProps = {
  collection: null,
  handleItemClick: null,
};
class AddGameDialog extends React.Component {
  componentDidMount() {
    const { userId } = this.props;
    this.props.getUserCollectionsList(userId);
    this.props.getUserWishlistsList(userId);
  }
  handleClose = () => {
    this.props.closeAddGameDialog(this.props.selectedValue);
  };

  handleListItemClick = (value) => {
    this.props.closeAddGameDialog(value);
  };

  render() {
    const { classes, selectedValue, open, userList } = this.props;
    if (!open) {
      return null;
    }
    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={open} onBackdropClick={this.handleClose}>
        <DialogTitle id="simple-dialog-title">Add game to Collection</DialogTitle>
        <div>
          <List>
            {userList.map(collection => (
              <UserListItem
                avatarClassName={classes.avatar}
                handleItemClick={() => this.handleListItemClick(collection)}
                key={collection.id}
                collection={collection}
              />
            ))}
            <AddNewCollectionButton onTouchTap={() => this.handleListItemClick('addAccount')} />
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
  dialogType: PropTypes.string.isRequired,
  getUserCollectionsList: PropTypes.func.isRequired,
  getUserWishlistsList: PropTypes.func.isRequired,
  closeAddGameDialog: PropTypes.func.isRequired,
  userId: PropTypes.number,
};

AddGameDialog.defaultProps = {
  userList: [],
  userId: null,
};
const mapStateToProps = state => selector(state);
const mapDispatchToProps = dispatch => ({
  getUserCollectionsList: userId => dispatch(getUserCollections(userId)),
  getUserWishlistsList: userId => dispatch(getUserWishlists(userId)),
  addGameToCollection: selectedCollection => dispatch(addGameToCollection(selectedCollection)),
  closeAddGameDialog: () => dispatch(closeAddGameDialog()),
});
const connectHOC = connect(mapStateToProps, mapDispatchToProps);
const withStylesHOC = withStyles(styles);
export default compose(connectHOC, withStylesHOC)(AddGameDialog);
