import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  button: {
    width: '100%',
  },
});

const propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  classes: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func,
};
const defaultProps = {
  id: 'gridButton',
  onSubmit: () => {},
};
const GridButton = ({ id, label, classes, onSubmit }) => (
  <Grid item xs={12}>
    <Button
      id={id}
      onTouchTap={onSubmit}
      raised
      color="primary"
      className={classes.button}
    >
      {label}
    </Button>
  </Grid>);
GridButton.propTypes = propTypes;
GridButton.defaultProps = defaultProps;
const withStylesHOC = withStyles(styles);
export default withStylesHOC(GridButton);
