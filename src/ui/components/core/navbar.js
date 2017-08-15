import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { search } from 'actions';

const propTypes = {
  handleToggleDrawer: PropTypes.func,
  classes: PropTypes.shape().isRequired,
};
const defaultProps = {
  handleToggleDrawer: null,
};

const styleSheet = createStyleSheet({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
});
class Navbar extends React.Component {
  handleSearchTermChange = (e) => {
    if (e.which !== 13) {
      return;
    }
    this.props.searchGamesWithTerm({
      term: e.target.value,
      zone: 'games',
    });
  }
  render() {
    const { handleToggleDrawer, classes, term } = this.props;
    return (<div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item xs={1} lg={1} xl={1}>
              <IconButton color="contrast" aria-label="Menu" onTouchTap={handleToggleDrawer} >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs={2} lg={2} xl={2}>
              <Typography type="title" color="inherit" className={classes.flex}>
            GameTracker
          </Typography>
            </Grid>
            <Grid item xs={12} lg={7}>
              <TextField
                id="searchBar"
                InputProps={{ placeholder: 'Search for games' }}
                inputClassName={classes.searchInput}
                color="contrast"
                margin="none"
                fullWidth
                onKeyPress={this.handleSearchTermChange}
              />
            </Grid>
            <Grid item xs={12} lg={2}>
              <Button color="contrast">Login</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>);
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
      term: state.corereducer.search.term,
  };
};
const mapDispatchToProps = dispatch =>
  ({
    searchGamesWithTerm: searchCriteria => dispatch(search(searchCriteria)),
  });
Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
const connectHOC = connect(mapStateToProps, mapDispatchToProps);
const withStylesHOC = withStyles(styleSheet);
export default compose(connectHOC, withStylesHOC)(Navbar);
