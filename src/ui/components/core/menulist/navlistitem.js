import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'material-ui/List/ListItem';
import ListItemText from 'material-ui/List/ListItemText';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import { Link } from 'react-router-dom';

const NavListItem = ({ linkUrl, linkLabel, linkIcon }) => (<ListItem button>
  <ListItemIcon>
    {linkIcon}
  </ListItemIcon>
  <Link to={linkUrl}><ListItemText primary={linkLabel} /></Link>
</ListItem>);

NavListItem.propTypes = {
  linkUrl: PropTypes.string.isRequired,
  linkLabel: PropTypes.string.isRequired,
  linkIcon: PropTypes.node.isRequired,
};

export default NavListItem;
