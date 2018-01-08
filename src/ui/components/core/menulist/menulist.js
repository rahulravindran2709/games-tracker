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
import Collections from 'material-ui-icons/Collections';
import Bookmark from 'material-ui-icons/Bookmark';
import BubbleChart from 'material-ui-icons/BubbleChart';
import Dashboard from 'material-ui-icons/Dashboard';
import { withStyles } from 'material-ui/styles';
import { logout } from 'actions/auth';
import { toggleDrawer } from 'actions';
import ImageAvatars from './imageavatar';

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

const navListItems = (
  <div>
    <NavListItem linkUrl={'/dashboard'} linkLabel={'Dashboard'} linkIcon={<Dashboard />} />
    <NavListItem linkUrl={'/dashboard'} linkLabel={'Collections'} linkIcon={<Collections />} />
    <NavListItem linkUrl={'/dashboard'} linkLabel={'Saved'} linkIcon={<Bookmark />} />
    <NavListItem linkUrl={'/dashboard'} linkLabel="Analytics" linkIcon={<BubbleChart />} />
  </div>
   );

const otherListItems = (
  <div>
    <NavListItem linkUrl={'/profile'} linkLabel={'Account'} linkIcon={<SettingsApplications />} />
    <NavListItem linkUrl={'/login'} linkLabel={'Logout'} linkIcon={<PowerSettingsNew />} />
  </div>
   );
const DrawerItems = ({ listStyle }) => (
  <div>
    <List className={listStyle} disablePadding>
      {navListItems}
    </List>
    <Divider />
    <List className={listStyle} disablePadding>
      {otherListItems}
    </List>
  </div>
  );

DrawerItems.propTypes = {
  listStyle: PropTypes.string.isRequired,
};
class MenuList extends React.Component {
  render() {
    const { classes, isDrawerOpen, toggleNavDrawer } = this.props;
    return (<Drawer
      open={isDrawerOpen}
      onRequestClose={toggleNavDrawer}
      onClick={toggleNavDrawer}
    >
      <ImageAvatars />
      {<DrawerItems listStyle={classes.list} />}
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
