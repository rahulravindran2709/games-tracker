import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  text: {
    color: '#fff',
  },
});
const SummarySection = ({ description, classes }) => (
  <Grid container>
    <Grid item md={10}>
      <Typography type="headline" className={classes.text}>Summary</Typography>
      <Typography gutterBottom className={classes.text}>
        {`${description}`}
      </Typography></Grid></Grid>);
SummarySection.propTypes = {
  description: PropTypes.string,
  classes: PropTypes.shape().isRequired,
};

SummarySection.defaultProps = {
  description: null,
};
const withStylesHOC = withStyles(styles);
export default withStylesHOC(SummarySection);
