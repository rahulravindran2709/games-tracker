import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import UserListSingle from './userlistsingle';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    width: '100%',
  },
  root: {
    width: '100%',
  },
});

const propTypes = {
  classes: PropTypes.shape().isRequired,
  collections: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  wishlists: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
const renderUserLists = userLists => (userLists.map(
  userListItem => (<Grid item md={6}>
    <UserListSingle itemData={userListItem} />
  </Grid>)));

const HeaderText = ({ text }) => (<Grid item md={12}>
  <Typography type="headline">{text}</Typography>
</Grid>);
HeaderText.propTypes = {
  text: PropTypes.string.isRequired,
};
const DashboardBody = ({ classes, collections, wishlists }) => (
  <div className={classes.root}>
    <Paper className={classes.paper}>
      <Grid container className={classes.meta}>
        <HeaderText text={'Collections'} />
        {renderUserLists(collections)}
      </Grid>
    </Paper>
    <Paper className={classes.paper}>
      <Grid container className={classes.meta}>
        <HeaderText text={'Wishlists'} />
        {renderUserLists(wishlists)}
      </Grid>
    </Paper>

  </div>);

DashboardBody.propTypes = propTypes;
const stylesHOC = withStyles(styles);
export default stylesHOC(DashboardBody);
