import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import moment from 'moment';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import RatingsCard from './ratingscard';
import PlaytimeCard from './playtimecard';

const styles = theme => ({
  root: {
  },
  meta: {
    padding: theme.spacing.unit * 2,
    width: '100%',
  },
  shadow: {
    color: '#000',
  },
  text: {
    color: '#000',
  },
});
const propTypes = {
  classes: PropTypes.shape().isRequired,
  details: PropTypes.shape().isRequired,
};

const GridText = ({ text, textClassName }) => (<Grid item md={3}>
  <div className="last-played">
    <Typography type="subheading" className={textClassName}>{text}</Typography>
  </div>
</Grid>);

GridText.propTypes = {
  text: PropTypes.string.isRequired,
  textClassName: PropTypes.string.isRequired,
};
const GameDetailsMeta = ({ classes, details: {
  releaseDate,
} }) => (<div className={classes.meta}>
  <Grid container className={classes.root} justify="flex-start">
    <Grid item md={6}>
      <RatingsCard />
    </Grid>
    <Grid item md={6}>
      <PlaytimeCard />
      <div className="release-date">
        <Typography type="subheading" className={classes.shadow}>Released {moment(releaseDate).format('MMMM Do, YYYY')}</Typography>
      </div>
    </Grid>
  </Grid>
  <Grid container className={classes.root} justify="flex-start">
    <GridText text={'Last played 27th January, 2017'} textClassName={classes.shadow} />
    <GridText text={'15 hours spent'} textClassName={classes.shadow} />
    <GridText text={'1 completed playthrough'} textClassName={classes.shadow} />
  </Grid>
</div>);

GameDetailsMeta.propTypes = propTypes;
const stylesHOC = withStyles(styles);
export default stylesHOC(GameDetailsMeta);
