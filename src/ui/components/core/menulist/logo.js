import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary[900],
    padding: theme.spacing.unit * 2,
  },
  text: {
    color: '#fff',
  },
});
const Logo = ({ classes }) => (
  <div className={classes.root}>
    <Typography type="headline" gutterBottom className={classes.text}>Game Tracker</Typography>
  </div>);

Logo.propTypes = {
  classes: PropTypes.shape().isRequired,
};
const withStylesHOC = withStyles(styles);
export default withStylesHOC(Logo);
