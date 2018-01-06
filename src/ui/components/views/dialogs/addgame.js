import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { getUserCollections, getUserWishlists } from 'actions/collections';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import PersonIcon from 'material-ui-icons/Person';
import AddIcon from 'material-ui-icons/Add';
import blue from 'material-ui/colors/blue';
import selector from './addgame.selector';


const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles = {
  avatar: {
    background: blue[100],
    color: blue[600],
  },
};

class AddGameDialog extends React.Component {
  componentDidMount() {
    this.props.getUserCollectionsList(1);
    this.props.getUserWishlistsList(1);
  }
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, open, collections, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Add game to Collection</DialogTitle>
        <div>
          <List>
            {collections.map(collection => (
              <ListItem
                button
                onClick={() => this.handleListItemClick(collection)}
                key={collection.id}
              >
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={collection.name} />
              </ListItem>
            ))}
            <ListItem button onClick={() => this.handleListItemClick('addAccount')}>
              <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="add account" />
            </ListItem>
          </List>
        </div>
      </Dialog>
    );
  }
}

AddGameDialog.propTypes = {
  classes: PropTypes.shape().isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
  open: PropTypes.bool.isRequired,
  collections: PropTypes.arrayOf(PropTypes.shape()),
  wishlists: PropTypes.arrayOf(PropTypes.shape()),
  dialogType: PropTypes.string.isRequired,
  getUserCollectionsList: PropTypes.func.isRequired,
  getUserWishlistsList: PropTypes.func.isRequired,
};

const mapStateToProps = state => selector(state);
const mapDispatchToProps = dispatch => ({
  getUserCollectionsList: userId => dispatch(getUserCollections(userId)),
  getUserWishlistsList: userId => dispatch(getUserWishlists(userId)),
});
const connectHOC = connect(mapStateToProps, mapDispatchToProps);
const withStylesHOC = withStyles(styles);
export default compose(connectHOC, withStylesHOC)(AddGameDialog);
