import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import moment from 'moment';
import Typography from 'material-ui/Typography';
import Rating from 'components/widgets/rating';
import { withStyles } from 'material-ui/styles';

const styles = (theme) => ({
  root: {
  },
  meta: {
    position: 'absolute',
    bottom: '10px',
    height: '100px',
    padding: theme.spacing.unit * 2,
    width: '100%',
  },
  shadow: {
    'text-shadow': '0px 0px 1px #191919,0px 0px 5px #000',
    color: '#fff',
  },
  text: {
    color: '#fff',
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
const GameDetailsBanner = ({ classes, details: {
  releaseDate,
} }) => (<div className={classes.meta}>
  <Grid container className={classes.root} justify="flex-start">
    <Grid item md={3}>
      <Rating value={3} />
      <Typography type="subheading" className={classes.shadow}>
        <span className="ratings-text">4.1/5 <span className="reviews-number">(33 reviews)</span></span>
      </Typography>
    </Grid>
    <Grid item md={3}>
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

GameDetailsBanner.propTypes = propTypes;
const stylesHOC = withStyles(styles);
export default stylesHOC(GameDetailsBanner);
