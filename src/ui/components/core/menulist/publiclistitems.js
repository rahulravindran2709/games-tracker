import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Update from 'material-ui-icons/Update';
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
    <NavListItem linkUrl={'/register'} linkLabel={'Register'} linkIcon={<AccountCircle />} />
    <NavListItem linkUrl={'/forgotpassword'} linkLabel={'Forgot Password'} linkIcon={<Update />} />
  </div>
   );
const PublicListItems = ({ classes }) => (<List className={classes.list} disablePadding>
  {navListItems}
</List>);
PublicListItems.propTypes = {
  classes: PropTypes.shape().isRequired,
};

const withStylesHOC = withStyles(styles);
export default withStylesHOC(PublicListItems);
