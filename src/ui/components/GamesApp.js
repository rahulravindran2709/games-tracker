import React from 'react'
import FacebookLogin from 'react-facebook-login'
import {connect} from 'react-redux'
import {startLogin,loginSucceeded} from '../actions'

const mapStateToProps = (state) => {
  return {
    userDetails: state.userDetails
  }
}

class GamesApp extends React.Component {
  initiatedLogin = ()=>{
  	this.props.dispatch(startLogin())
  }
  handleLoginSuccess=(userData)=>{
  	this.props.dispatch(loginSucceeded(userData))
  }
  render () {
    return (<FacebookLogin
      appId='714754525386059'
      fields='name,email,picture'
      onClick={this.initiatedLogin}
      callback={this.handleLoginSuccess} />)
  }
}
export default connect(mapStateToProps)(GamesApp)
