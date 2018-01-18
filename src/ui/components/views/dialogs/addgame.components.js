import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import AddIcon from 'material-ui-icons/Add';
import { COLLECTION, WISHLIST } from 'constants/collections';
import PersonIcon from 'material-ui-icons/Person';

const TYPES = [COLLECTION, WISHLIST];
export const AddNewListButton = ({ onTouchTap, listType }) => (
  <ListItem
    button
    onTouchTap={onTouchTap}
  >
    <ListItemAvatar>
      <Avatar>
        <AddIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={`Add new ${listType}`} />
  </ListItem>);

AddNewListButton.propTypes = {
  onTouchTap: PropTypes.func.isRequired,
  listType: PropTypes.oneOf(TYPES).isRequired,
};


export const UserListItem = ({ collection, avatarClassName, handleItemClick }) => (
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


export const EmptyListText = ({ dialogType }) => (
  <ListItem>
    <ListItemText primary={`You do not have any ${dialogType}s yet. Create one?`} />
  </ListItem>);
EmptyListText.propTypes = {
  dialogType: PropTypes.oneOf(TYPES).isRequired,
};
