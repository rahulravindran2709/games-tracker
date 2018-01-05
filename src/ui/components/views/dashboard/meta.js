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
const GridText = ({ text }) => (<Grid item md={3}>
  <Typography type="subheading" className="shadow text">
    {text}
  </Typography>
</Grid>);
GridText.propTypes = {
  text: PropTypes.string.isRequired,
};
const DashboardMeta = ({ classes }) => (
  <div className="meta">
    <Grid container className={classes.root}>
      <Grid item md={3} />
      <GridText text={'56 games collected'} />
      <GridText text={'3 games in wishlist'} />
    </Grid>
    <Grid container className={classes.root}>
      <GridText text={'Last played 27th January, 2017'} />
      <GridText text={'15 hours spent'} />
      <GridText text={'2 completed games'} />
    </Grid>
  </div>
);

DashboardMeta.propTypes = propTypes;
const stylesHOC = withStyles(styles);
export default stylesHOC(DashboardMeta);
