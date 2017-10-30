import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import 'normalize.css';
import Navbar from 'components/core/navbar';
import { Route, Switch } from 'react-router-dom';
import MenuList from 'components/core/menulist';
import SearchResultsView from 'components/views/searchresults';
import GameDetailsView from 'components/views/gamedetails';
import { startLogin, loginSucceeded, toggleDrawer } from 'actions';
import { loadEnumData } from 'actions/enums';
import Dashboard from './dashboard';
import LoginForm from './login';

const propTypes = {
  isDrawerOpen: PropTypes.bool,
  toggleNavDrawer: PropTypes.func,
  onLoginStart: PropTypes.func,
  onLoginSuccess: PropTypes.func,
};
const defaultProps = {
  isDrawerOpen: false,
  toggleNavDrawer: null,
  onLoginStart: null,
  onLoginSuccess: null,
};
const mapStateToProps = (state) => {
  const { authreducer, corereducer, enums } = state;
  return {
    userDetails: authreducer.userDetails,
    isAuthenticated: !!authreducer.userDetails.username,
    isDrawerOpen: corereducer.isDrawerOpen,
    enums,
  };
};

class GamesApp extends React.Component {
  componentWillMount() {
    this.props.loadEnumData();
  }
  handleToggleDrawer = () => {
    this.props.toggleNavDrawer();
  }
  handleLoginStart= () => this.props.onLoginStart();
  handleLoginSuccess=(userData) => {
    this.props.onLoginSuccess(userData);
  }

  render() {
    const { isDrawerOpen } = this.props;
    const loginForm = (<LoginForm
      onLoginStart={this.handleLoginStart}
      onLoginSuccess={this.handleLoginSuccess}
    />);
    return (<div>
      <Navbar handleToggleDrawer={this.handleToggleDrawer} />
      <MenuList isOpen={isDrawerOpen} onRequestChange={this.handleToggleDrawer} />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" render={() => loginForm} />
        <Route path="/searchresults" component={SearchResultsView} />
        <Route path="/gamedetails/:id" component={({ match }) => (<GameDetailsView id={match.params.id} />)} />
        <Route path="/" render={() => loginForm} />
      </Switch>
    </div>);
  }
}
const mapDispatchToProps = dispatch =>
  ({
    toggleNavDrawer: () => dispatch(toggleDrawer()),
    onLoginStart: () => dispatch(startLogin()),
    onLoginSuccess: userData => dispatch(loginSucceeded(userData)),
    loadEnumData: () => dispatch(loadEnumData()),
  });
GamesApp.propTypes = propTypes;
GamesApp.defaultProps = defaultProps;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GamesApp));
