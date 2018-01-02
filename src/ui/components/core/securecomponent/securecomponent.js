import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const propTypes = {
  isAuth: PropTypes.bool.isRequired,
  protectedComponent: PropTypes.func.isRequired,
  unprotectedComponent: PropTypes.func,
};
const defaultProps = {
  unprotectedComponent: null,
};
const SecureComponent = ({ isAuth, protectedComponent: ProtectedComponent,
  unprotectedComponent: UnprotectedComponent }) => {
  if (isAuth) {
    return <ProtectedComponent />;
  }
  if (!isAuth && UnprotectedComponent) {
    return <UnprotectedComponent />;
  }
  return null;
};
SecureComponent.propTypes = propTypes;
SecureComponent.defaultProps = defaultProps;
const mapStateToProps = state => ({
  isAuth: !!state.auth.token,
});
const connectHOC = connect(mapStateToProps);
export default connectHOC(SecureComponent);
