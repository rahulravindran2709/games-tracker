import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from 'actions/auth';

const propTypes = {

};

class RegistrationView extends React.Component {
  render() {

  }
}


RegistrationView.propTypes = propTypes;
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch =>
  ({
    register: user => dispatch(registerUser(user)),
  });
const connectHOC = connect(mapStateToProps, mapDispatchToProps);
export default connectHOC(RegistrationView);
