import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import deepPurple from 'material-ui/colors/deepPurple';
import { map } from 'ramda';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  chip: {
    margin: theme.spacing.unit,
  },
  meta: {
    height: '100px',
  },
  avatar: {
    margin: 0,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
});

const GenreSection = ({ classes, genres }) => {
  const genreList = map(genre => (<Grid item key={genre}>
    <Chip
      avatar={<Avatar className={classes.avatar}>A</Avatar>}
      label={genre}
      className={classes.chip}
    /></Grid>))(genres);
  return (<Grid container className={classes.meta}>
    <Grid item md={12}>
      <Grid container align={'center'}>
        <Grid item md={2}>
          <Typography type="button">Genres</Typography>
        </Grid>
        <Grid item md>
          <Typography type="button">
            <Grid container align={'flex-start'}>
              {genreList}
            </Grid>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>);
};
GenreSection.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  classes: PropTypes.shape().isRequired,
};

GenreSection.defaultProps = {
  genres: [],
};
const stylesHOC = withStyles(styles);
export default stylesHOC(GenreSection);
