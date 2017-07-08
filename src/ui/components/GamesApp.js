import React from 'react'
import {connect} from 'react-redux'
import {startLogin,loginSucceeded} from '../actions'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom'
import Dashboard from './dashboard';
import LoginForm from './login'
const mapStateToProps = (state) => {
  const {authreducer} = state;
  return {
    userDetails: authreducer.userDetails,
    isAuthenticated:!!authreducer.userDetails.username
  }
}

class GamesApp extends React.Component {
  handleLoginStart= () => this.props.dispatch(startLogin())
  handleLoginSuccess=(userData)=>{
  	this.props.dispatch(loginSucceeded(userData))
  }
  render () {
  	let  loginForm = <LoginForm onLoginStart={this.handleLoginStart} onLoginSuccess={this.handleLoginSuccess} />
    return (<div>
      <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" render={()=>loginForm} />
      <Route path="/" render={()=>loginForm} />
    </Switch>
    </div>)
  }
}
export default connect(mapStateToProps)(GamesApp)
