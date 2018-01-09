import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SettingsApplications from 'material-ui-icons/SettingsApplications';
import PowerSettingsNew from 'material-ui-icons/PowerSettingsNew';
import Collections from 'material-ui-icons/Collections';
import Bookmark from 'material-ui-icons/Bookmark';
import BubbleChart from 'material-ui-icons/BubbleChart';
import Dashboard from 'material-ui-icons/Dashboard';
import Divider from 'material-ui/Divider';
import List from 'material-ui/List';
import NavListItem from './navlistitem';

const styles = theme => ({
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
    <NavListItem linkUrl={'/dashboard'} linkLabel={'Dashboard'} linkIcon={<Dashboard />} />
    <NavListItem linkUrl={'/dashboard'} linkLabel={'Collections'} linkIcon={<Collections />} />
    <NavListItem linkUrl={'/dashboard'} linkLabel={'Saved'} linkIcon={<Bookmark />} />
    <NavListItem linkUrl={'/dashboard'} linkLabel={'Analytics'} linkIcon={<BubbleChart />} />
  </div>
   );

const otherListItems = (
  <div>
    <NavListItem linkUrl={'/profile'} linkLabel={'Account'} linkIcon={<SettingsApplications />} />
    <NavListItem linkUrl={'/login'} linkLabel={'Logout'} linkIcon={<PowerSettingsNew />} />
  </div>
   );
const SecureListItems = ({ classes }) => (
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

SecureListItems.propTypes = {
  classes: PropTypes.shape().isRequired,
};

const withStylesHOC = withStyles(styles);
export default withStylesHOC(SecureListItems);
