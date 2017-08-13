import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import normalize from 'normalize.css';
import Navbar from 'components/core/navbar';
import { Route, Switch } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { startLogin, loginSucceeded, toggleDrawer } from 'actions';
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
  const { authreducer, corereducer } = state;
  return {
    userDetails: authreducer.userDetails,
    isAuthenticated: !!authreducer.userDetails.username,
    isDrawerOpen: corereducer.isDrawerOpen,
  };
};

class GamesApp extends React.Component {
  handleToggleDrawer = () => {
    console.log('Here');
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
      <Drawer
        docked={false}
        width={200}
        open={isDrawerOpen}
        onRequestChange={this.handleToggleDrawer}
      >
        <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
        <MenuItem onTouchTap={this.handleClose}>Analytics</MenuItem>
      </Drawer>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" render={() => loginForm} />
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
  });
GamesApp.propTypes = propTypes;
GamesApp.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(GamesApp);
