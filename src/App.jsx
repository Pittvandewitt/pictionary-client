import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SignupFormContainer from './components/SignupFormContainer';
import LoginFormContainer from './components/LoginFormContainer';
import Logout from './components/Logout';
import { connect } from 'react-redux'
import { USER_LOGIN } from './actions/userActions'
import LobbyContainer from './components/LobbyContainer';

class App extends Component {

  componentCleanup = () => {
    localStorage.setItem('someSavedState', JSON.stringify(this.props.user))
  }

  componentWillMount() {
    window.addEventListener('beforeunload', this.componentCleanup)

    const rehydrate = JSON.parse(localStorage.getItem('someSavedState'))
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
    return (
      <BrowserRouter>
        <div>
          <h2>Pictionary</h2>
          {this.props.user.jwt && <Logout />}
          {this.props.user.jwt && <Route path="/" component={LobbyContainer} />}
          {!this.props.user.jwt && <Route path="/" component={LoginFormContainer} />}
          {!this.props.user.jwt && <Route path="/" component={SignupFormContainer} />}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (props) => {
  return { user: props.user }
}

export default connect(mapStateToProps)(App);
