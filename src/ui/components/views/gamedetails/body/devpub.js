import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import deepPurple from 'material-ui/colors/deepPurple';
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
const DevPublGrid = ({ classes }) => (<Grid container className={classes.meta}>
  <Grid item md={6}>
    <Grid container align={'center'}>
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
  <Grid item md={6}>
    <Grid container align={'center'}>
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
DevPublGrid.propTypes = {
  classes: PropTypes.shape().isRequired,
};
const stylesHOC = withStyles(styles);
export default stylesHOC(DevPublGrid);
