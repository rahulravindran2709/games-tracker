import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemText from 'material-ui/List/ListItemText';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import SettingsApplications from 'material-ui-icons/SettingsApplications';
import PowerSettingsNew from 'material-ui-icons/PowerSettingsNew';
import Games from 'material-ui-icons/Games';
import { withStyles, createStyleSheet } from 'material-ui/styles';


const styleSheet = createStyleSheet({
  list: {
    width: 250,
    flex: 'initial',
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
      <Link to="/"><ListItemText primary="Account" /></Link>
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
    const { classes, isOpen, onRequestChange } = this.props;
    console.log(isOpen, 'Is open')
    return (<Drawer
      open={isOpen}
      onRequestClose={onRequestChange}
      onClick={onRequestChange}
    >
      {<SideList classes={classes} />}
    </Drawer>);
  }
}

MenuList.propTypes = {
  classes: PropTypes.shape().isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRequestChange: PropTypes.func,
};

export default withStyles(styleSheet)(MenuList);
