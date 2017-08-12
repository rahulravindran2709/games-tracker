import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';

const propTypes = {
  onLoginStart: PropTypes.func,
  onLoginSuccess: PropTypes.func,
};
const defaultProps = {
  onLoginStart: null,
  onLoginSuccess: null,
};
class LoginForm extends React.Component {
  render() {
    return (<div><FacebookLogin
      appId="714754525386059"
      fields="name,email,picture"
      onClick={this.props.onLoginStart}
      callback={this.props.onLoginSuccess}
    /></div>);
  }
}
LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;
export default LoginForm;
