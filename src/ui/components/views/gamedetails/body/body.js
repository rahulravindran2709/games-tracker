import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import style from './style.scss';
import GenreSection from './genre';
import DevPubGrid from './devpub';

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
});

const SummarySection = ({ description }) => (
  <Grid container>
    <Grid item md={6}><Typography type="headline">Summary</Typography>
      <Typography gutterBottom noWrap>
        {`
    ${description}
  `}
      </Typography></Grid></Grid>);
const GameDetailsBody = ({ classes }) => (
  <Grid container className={classes.root} justify={'center'}>
    <Grid item md={6}>
      <DevPubGrid classes={classes} />
      <GenreSection classes={classes} genres={['Action', 'Adventure']} />
      <SummarySection description={'Some short shitty summary'} />
    </Grid>
  </Grid>);
GameDetailsBody.propTypes = {
  classes: PropTypes.shape().isRequired,
};
const stylesHOC = withStyles(styles);
export default stylesHOC(GameDetailsBody);
