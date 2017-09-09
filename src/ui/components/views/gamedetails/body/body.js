import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import deepPurple from 'material-ui/colors/deepPurple';
import { withStyles } from 'material-ui/styles';
import style from './style.scss';


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
const DevPublGrid = ({ classes }) => (<Grid container className={classes.meta} justify={'center'} align={'center'}>
  <Grid item md={3}>
    <Grid container justify={'center'} align={'center'}>
      <Grid item md={3}>
        <Typography type="button">Publisher</Typography>
      </Grid>
      <Grid item md={6}>
        <Typography type="button">
          <Chip
            avatar={<Avatar className={classes.avatar}>U</Avatar>}
            label="Ubisoft"
            className={classes.chip}
          /></Typography>
      </Grid>
    </Grid>
  </Grid>
  <Grid item md={3}>
    <Grid container justify={'center'} align={'center'}>
      <Grid item md={3}>
        <Typography type="button">Developer</Typography>
      </Grid>
      <Grid item md={6}>
        <Typography type="button">
          <Chip
            avatar={<Avatar className={classes.avatar}>U</Avatar>}
            label="Ubisoft"
            className={classes.chip}
          /></Typography>
      </Grid>
    </Grid>
  </Grid>
</Grid>);
const GenreSection = ({ classes }) => (<Grid container className={classes.meta} justify={'center'} align={'center'}>
  <Grid item md={5}>
    <Grid container justify={'center'} align={'center'}>
      <Grid item md={3}>
        <Typography type="button">Genres</Typography>
      </Grid>
      <Grid item md>
        <Typography type="button">
          <Grid container align={'flex-start'}>
            <Grid item>
              <Chip
                avatar={<Avatar className={classes.avatar}>A</Avatar>}
                label="Action"
                className={classes.chip}
              /></Grid><Grid item><Chip
                avatar={<Avatar className={classes.avatar}>A</Avatar>}
                label="Adventure"
                className={classes.chip}
              /></Grid>
            <Grid item>
              <Chip
                avatar={<Avatar className={classes.avatar}>A</Avatar>}
                label="Action"
                className={classes.chip}
              /></Grid></Grid>
        </Typography>
      </Grid>
    </Grid>
  </Grid>
</Grid>);
const GameDetailsBody = ({ classes }) => (
  <Grid container className={classes.root} >
    <Grid item md={12}>
      <DevPublGrid classes={classes} />
      <GenreSection classes={classes} />
    </Grid>
  </Grid>);

const stylesHOC = withStyles(styles);
export default stylesHOC(GameDetailsBody);
