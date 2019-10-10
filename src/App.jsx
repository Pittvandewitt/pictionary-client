import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { USER_LOGIN } from './actions/userActions'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import SignupFormContainer from './components/SignupFormContainer';
import LoginFormContainer from './components/LoginFormContainer';
import Logout from './components/Logout';
import LobbyContainer from './components/LobbyContainer';

class App extends Component {

  componentCleanup = () => {
    localStorage.setItem('userLogin', JSON.stringify(this.props.user))
  }

  UNSAFE_componentWillMount() {
    window.addEventListener('beforeunload', this.componentCleanup)

    const rehydrate = JSON.parse(localStorage.getItem('userLogin'))
    rehydrate.jwt && this.props.dispatch({
      type: USER_LOGIN,
      payload: rehydrate
    })
  }

  componentWillUnmount() {
    this.componentCleanup()
    window.removeEventListener('beforeunload', this.componentCleanup)
  }

  render() {
    return <div>
      <BrowserRouter>
        <nav>
          {this.props.user.jwt && <Logout />}
          {!this.props.user.jwt && <Route path="/signup" component={SignupFormContainer} />}
          <Route path="/login" component={LoginFormContainer} />
          <Route path="/gameroom/:name" />
        </nav>

        {this.props.user.jwt ?
          <Route exact path="/" component={LobbyContainer} /> : 
          <Redirect to='/signup' />}
      </BrowserRouter>

    </div>
  }
}

const mapStateToProps = (props) => {
  return { user: props.user }
}

export default connect(mapStateToProps)(App);
