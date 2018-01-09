import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    display: 'flex',
  },
});
const propTypes = {
  handleSearchTermChange: PropTypes.func.isRequired,
};
const Search = ({ handleSearchTermChange }) => (<Grid item xs={12} lg={7}>
  <TextField
    id="searchBar"
    placeholder={'Search for games'}
    margin="none"
    fullWidth
    onKeyPress={handleSearchTermChange}
  /></Grid>);

Search.propTypes = propTypes;
const withStylesHOC = withStyles(styles);
export default withStylesHOC(Search);
