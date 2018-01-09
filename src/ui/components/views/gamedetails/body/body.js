import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import GenreSection from './genre';
import DevPubGrid from './devpub';
import ScreenshotSection from './screenshots';
import SummarySection from './summary';
import GameDetailsBannerMeta from './meta';

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
});


const data = [{ id: 1, url: 'http://via.placeholder.com/350x150' }, { id: 2, url: 'http://via.placeholder.com/350x150' }, { id: 3, url: 'http://via.placeholder.com/350x150' }, { id: 4, url: 'http://via.placeholder.com/350x150' }, { id: 5, url: 'http://via.placeholder.com/350x150' }];
const GameDetailsBody = ({ classes, details: { summary = '', first_release_date }, genres }) => (<div>
  <Grid container className={classes.root} justify={'center'}>
    <Grid item md={6}>
      <DevPubGrid classes={classes} />
      <GenreSection classes={classes} genres={genres} />
      <SummarySection description={summary} />
    </Grid>
  </Grid>
  <Grid container justify={'center'}>
    <Grid item md={6}>
      {<ScreenshotSection screenshots={data} />}
    </Grid>
    <Grid item md={6}>
      <GameDetailsBannerMeta details={{ releaseDate: first_release_date }} />
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
