import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import './style.scss';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});
const propTypes = {
  classes: PropTypes.shape().isRequired,
  userName: PropTypes.string.isRequired,
};

const DashboardBanner = ({ classes, userName }) => (
  <Grid container className={classes.root}>
    <Grid item md={12}>
      <div className="banner">
        <div className="header">
          <Typography type="display2" gutterBottom className="shadow text">{userName + '\'s gaming life'}</Typography>
        </div>
      </div>
    </Grid>
  </Grid>);

DashboardBanner.propTypes = propTypes;
const stylesHOC = withStyles(styles);
export default stylesHOC(DashboardBanner);
