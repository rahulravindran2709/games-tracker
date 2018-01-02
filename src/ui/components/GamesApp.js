import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import 'normalize.css';
import Navbar from 'components/core/navbar';
import { Route, Switch } from 'react-router-dom';
import MenuList from 'components/core/menulist';
import PrivateRoute from 'components/core/privateroute';
import SearchResultsView from 'components/views/searchresults';
import DashboardView from 'components/views/dashboard';
import GameDetailsView from 'components/views/gamedetails';
import LoginView from 'components/views/login';
import RegisterView from 'components/views/register';
import { toggleDrawer } from 'actions';
import { loadEnumData } from 'actions/enums';


const propTypes = {
  isDrawerOpen: PropTypes.bool,
  toggleNavDrawer: PropTypes.func,
  loadEnumData: PropTypes.func.isRequired,
};
const defaultProps = {
  isDrawerOpen: false,
  toggleNavDrawer: null,
};


const mapStateToProps = (state) => {
  const { corereducer, enums } = state;
  return {
    isDrawerOpen: corereducer.isDrawerOpen,
    enums,
  };
};

class GamesApp extends React.Component {
  componentWillMount() {
    // this.props.loadEnumData();
  }
  handleToggleDrawer = () => {
    this.props.toggleNavDrawer();
  }

  render() {
    const { isDrawerOpen } = this.props;
    return (<div>
      <Navbar handleToggleDrawer={this.handleToggleDrawer} />
      <MenuList isOpen={isDrawerOpen} onRequestChange={this.handleToggleDrawer} />
      <Switch>
        <Route path="/login" component={LoginView} />
        <Route path="/register" component={RegisterView} />
        <PrivateRoute path="/dashboard" component={DashboardView} />
        <PrivateRoute path="/searchresults" component={SearchResultsView} />
        <PrivateRoute path="/gamedetails/:id" component={({ match }) => (<GameDetailsView id={match.params.id} />)} />
        <PrivateRoute path="/" component={DashboardView} />
      </Switch>
    </div>);
  }
}
const mapDispatchToProps = dispatch =>
  ({
    toggleNavDrawer: () => dispatch(toggleDrawer()),
    loadEnumData: () => dispatch(loadEnumData()),
  });
GamesApp.propTypes = propTypes;
GamesApp.defaultProps = defaultProps;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GamesApp));
