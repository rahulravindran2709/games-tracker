import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import './style.scss';

const propTypes = {
  classes: PropTypes.shape().isRequired,
};

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});
const DashboardMeta = ({ classes }) => (
  <div className="dashboard-meta">
    <Grid container className={classes.root}>
      <Grid item md={3} />
      <Grid item md={3}>
        <Typography type="subheading" className="shadow text">
          56 games collected
        </Typography>
      </Grid>
      <Grid item md={3}>
        <div className="release-date">
          <Typography type="subheading" className="shadow text">
            3 games in wishlist
          </Typography>
        </div>
      </Grid>
    </Grid>
    <Grid container className={classes.root}>
      <Grid item md={3}>
        <div className="last-played">
          <Typography type="subheading" className="shadow text">
            Last played 27th January, 2017
          </Typography>
        </div>
      </Grid>
      <Grid item md={3}>
        <div className="hours_played">
          <Typography type="subheading" className="shadow text">15 hours spent</Typography>
        </div>
      </Grid>
      <Grid item md={3}>
        <div className="playthroughs">
          <Typography type="subheading" className="shadow text">2 completed games</Typography>
        </div>
      </Grid>
    </Grid>
  </div>
);

DashboardMeta.propTypes = propTypes;
const stylesHOC = withStyles(styles);
export default stylesHOC(DashboardMeta);
