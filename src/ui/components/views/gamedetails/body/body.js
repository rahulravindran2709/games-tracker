import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import moment from 'moment';
import GenreSection from './genre';
import DevPubGrid from './devpub';
import ScreenshotSection from './screenshots';
import SummarySection from './summary';
import RatingsCard from './ratingscard';
import PlaytimeCard from './playtimecard';


const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 2,
    backgroundColor: theme.palette.primary[900],
    color: '#fff',
  },
  chip: {
    margin: theme.spacing.unit,
  },
  meta: {
    height: '100px',
  },
  text: {
    color: '#fff',
  },
});


const data = [{ id: 1, url: 'http://via.placeholder.com/350x150' }, { id: 2, url: 'http://via.placeholder.com/350x150' }, { id: 3, url: 'http://via.placeholder.com/350x150' }, { id: 4, url: 'http://via.placeholder.com/350x150' }, { id: 5, url: 'http://via.placeholder.com/350x150' }];
const GameDetailsBody = ({ classes, details: { summary = '', first_release_date }, genres }) => (<div>
  <Grid container className={classes.root} justify={'center'}>
    <Grid item md={6}>
      <DevPubGrid classes={classes} />
      <GenreSection classes={classes} genres={genres} />
      <Typography type="subheading" className={classes.text}>Released {moment(first_release_date).format('MMMM Do, YYYY')}</Typography>
      <SummarySection description={summary} />
    </Grid>
  </Grid>
  <Grid container justify={'flex-end'}>
    <Grid item xs={6}>
      <PlaytimeCard />
      <ScreenshotSection screenshots={data} />
    </Grid>
    <Grid item md={3}>
      <RatingsCard />
    </Grid>
  </Grid>
</div>);
GameDetailsBody.propTypes = {
  classes: PropTypes.shape().isRequired,
  details: PropTypes.shape().isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
const stylesHOC = withStyles(styles);
export default stylesHOC(GameDetailsBody);
