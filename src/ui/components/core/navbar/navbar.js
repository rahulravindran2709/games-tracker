import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import AppBar from 'material-ui/AppBar';

import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { search } from 'actions';
import { logout } from 'actions/auth';
import SecureComponent from 'components/core/securecomponent';
import UserCard from './usercard';
import Search from './search';

const propTypes = {
  handleToggleDrawer: PropTypes.func,
  searchGamesWithTerm: PropTypes.func,
  classes: PropTypes.shape().isRequired,
  performLogout: PropTypes.func.isRequired,
  currentUser: PropTypes.shape().isRequired,
};
const defaultProps = {
  handleToggleDrawer: null,
  searchGamesWithTerm: null,
};

const styleSheet = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
});
const LoginButton = () => (<Button>Login</Button>);

const DrawerOpenIcon = ({ handleToggleDrawer }) => (<Grid item xs={1} lg={1} xl={1}>
  <IconButton color="contrast" aria-label="Menu" onTouchTap={handleToggleDrawer} >
    <MenuIcon />
  </IconButton>
</Grid>);

const RouteHeader = ({ routeName, headerClassName }) => (<Grid item xs={2} lg={2} xl={2}>
  <Typography type="title" color="inherit" className={headerClassName}>
{routeName}
</Typography>
</Grid>);
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
    const { handleToggleDrawer, classes, performLogout, currentUser } = this.props;
    const renderUserCard = () =>
    (<UserCard userDetails={currentUser} handleLogout={performLogout} />);
    return (<div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container>
            <DrawerOpenIcon handleToggleDrawer={handleToggleDrawer} />
            <RouteHeader headerClassName={classes.flex} routeName={'Current Route'} />
            <Search handleSearchTermChange={this.handleSearchTermChange} />
            <Grid item xs={12} lg={2}>
              <SecureComponent
                protectedComponent={renderUserCard}
                unprotectedComponent={LoginButton}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>);
  }
}

const mapStateToProps = ({ corereducer, auth }) => ({
  term: corereducer.search.term,
  currentUser: auth.user,
});
const mapDispatchToProps = dispatch =>
  ({
    searchGamesWithTerm: searchCriteria => dispatch(search(searchCriteria)),
    performLogout: () => dispatch(logout()),
  });
Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
const connectHOC = connect(mapStateToProps, mapDispatchToProps);
const withStylesHOC = withStyles(styleSheet);
export default compose(connectHOC, withStylesHOC)(Navbar);
