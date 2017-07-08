import React from 'react';
import FacebookLogin from 'react-facebook-login';

export default class LoginForm extends React.Component {
  render () {
    return (<FacebookLogin
      appId='714754525386059'
      fields='name,email,picture'
      onClick={this.props.onLoginStart}
      callback={this.props.onLoginSuccess}
    />)
  }
}
