import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import renderIf from 'render-if';
import { isEmpty } from 'ramda';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { LinearProgress } from 'material-ui/Progress';
import moment from 'moment';
import GenreSection from './genre';
import DevPubGrid from './devpub';
import ScreenshotSection from './screenshots';
import SummarySection from './summary';
import RatingsCard from './ratingscard';
import PlaytimeCard from './playtimecard';
import QuickInfoCard from './quickinfocard';


const styles = theme => ({
  details: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 2,
    backgroundColor: theme.palette.primary[900],
    color: '#fff',
  },
  progress: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
  meta: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.paper,
  },
  chip: {
    margin: theme.spacing.unit,
  },
  text: {
    color: '#fff',
  },
});

const GameDetailsBody = (props) => {
  const { classes, details, genres, collectionDetails } = props;
  const renderProgress = renderIf(!details || isEmpty(details));
  const renderIfNotEmpty = renderIf(details && !isEmpty(details));
  const { name, developers, publishers, summary, screenshots,
    first_release_date, rating, rating_count: ratingCount } = details;
  return (<div>
    <Grid container className={classes.details} justify={'center'}>
      <Grid item md={6}>
        {renderProgress(<div className={classes.progress}><LinearProgress color="accent" /></div>)}
        {renderIfNotEmpty(<div><DevPubGrid developerIds={developers} publisherIds={publishers} />
          <GenreSection genres={genres} />
          <Typography type="subheading" className={classes.text}>Released {moment(first_release_date).format('MMMM Do, YYYY')}</Typography>
          <SummarySection description={summary} /></div>)}
      </Grid>
    </Grid>
    <Grid container justify={'flex-end'} className={classes.meta}>
      <Grid item xs={3}>
        <QuickInfoCard gameTitle={name} collectionDetails={collectionDetails} /></Grid>
      <Grid item xs={6}>
        <PlaytimeCard />
        <ScreenshotSection screenshots={screenshots} />
      </Grid>
      <Grid item md={3}><RatingsCard score={rating} ratingCount={ratingCount} /></Grid>
    </Grid>
  </div>);
};
GameDetailsBody.propTypes = {
  classes: PropTypes.shape().isRequired,
  details: PropTypes.shape().isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape()),
  collectionDetails: PropTypes.arrayOf(PropTypes.shape()),
};
GameDetailsBody.defaultProps = {
  genres: null,
};
const stylesHOC = withStyles(styles);
export default stylesHOC(GameDetailsBody);
