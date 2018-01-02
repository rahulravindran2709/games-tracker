import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import selector from './privateroute.selector';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuth === true ? <Component {...props} /> : <Redirect to={{
      pathname: '/login',
      state: { from: props.location }
    }}
    />)}
  />
);
PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
};
const mapStateToProps = state => selector(state);
const connectHOC = connect(mapStateToProps);
export default connectHOC(PrivateRoute);
