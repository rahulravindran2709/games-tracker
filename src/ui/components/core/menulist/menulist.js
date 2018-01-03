import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemText from 'material-ui/List/ListItemText';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import SettingsApplications from 'material-ui-icons/SettingsApplications';
import PowerSettingsNew from 'material-ui-icons/PowerSettingsNew';
import Games from 'material-ui-icons/Games';
import { withStyles } from 'material-ui/styles';
import { logout } from 'actions/auth';
import { toggleDrawer } from 'actions';

const styleSheet = theme => ({
  list: {
    width: 250,
    flex: 'initial',
    background: theme.palette.background.paper,
  },
  listFull: {
    width: 'auto',
    flex: 'initial',
  },
});


const navListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Games />
      </ListItemIcon>
      <Link to="/dashboard"><ListItemText primary="Dashboard" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingsApplications />
      </ListItemIcon>
      <ListItemText primary="Analytics" />
    </ListItem>
  </div>
   );

const otherListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <SettingsApplications />
      </ListItemIcon>
      <Link to="/profile"><ListItemText primary="Account" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PowerSettingsNew />
      </ListItemIcon>
      <Link to="/login"><ListItemText primary="Logout" /></Link>
    </ListItem>
  </div>
   );
const SideList = (props) => {
  const { classes } = props;
  return (
    <div>
      <List className={classes.list} disablePadding>
        {navListItems}
      </List>
      <Divider />
      <List className={classes.list} disablePadding>
        {otherListItems}
      </List>
    </div>
  );
};
class MenuList extends React.Component {
  render() {
    const { classes, isDrawerOpen, toggleNavDrawer } = this.props;
    return (<Drawer
      open={isDrawerOpen}
      onRequestClose={toggleNavDrawer}
      onClick={toggleNavDrawer}
    >
      {<SideList classes={classes} />}
    </Drawer>);
  }
}

MenuList.propTypes = {
  classes: PropTypes.shape().isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  toggleNavDrawer: PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch =>
  ({
    toggleNavDrawer: () => dispatch(toggleDrawer()),
    performLogout: () => dispatch(logout()),
  });
const mapStateToProps = (state) => {
  const { corereducer } = state;
  return {
    isDrawerOpen: corereducer.isDrawerOpen,
  };
};
const connectHOC = connect(mapStateToProps, mapDispatchToProps);
const withStylesHOC = withStyles(styleSheet);
export default compose(connectHOC, withStylesHOC)(MenuList);
