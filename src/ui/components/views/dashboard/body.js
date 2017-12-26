import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Slider from './slider';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
});

const propTypes = {
  classes: PropTypes.shape().isRequired,
  collections: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  wishlists: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
const DashboardBody = ({ classes, collections, wishlists }) => (
  <div className="body">
    <Grid container className={classes.meta}>
      <Grid item md={12}>
        <Typography type="headline">{'Collections'}</Typography>
      </Grid>
      <Grid item md={12}>
        <Slider collections={collections} />
      </Grid>
      <Grid item md={12}>
        <Typography type="headline">{'Wishlists'}</Typography>
      </Grid>
      <Grid item md={12}>
        <Slider collections={wishlists} />
      </Grid>
    </Grid>
  </div>);

DashboardBody.propTypes = propTypes;
const stylesHOC = withStyles(styles);
export default stylesHOC(DashboardBody);
