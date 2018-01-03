import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  textField: {
  },
});

const propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  classes: PropTypes.shape().isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
const defaultProps = {
  id: 'gridTextField',
  type: 'text',
  onChange: () => {},
  value: '',
};
const GridForm = ({ type, id, label, value, classes, onChange }) => (
  <Grid item xs={12}>
    <TextField
      type={type}
      id={id}
      label={label}
      className={classes.textField}
      value={value}
      onChange={onChange}
      margin="normal"
      fullWidth
    />
  </Grid>);
GridForm.propTypes = propTypes;
GridForm.defaultProps = defaultProps;
const withStylesHOC = withStyles(styles);
export default withStylesHOC(GridForm);
