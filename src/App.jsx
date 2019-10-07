import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SignupFormContainer from './components/SignupFormContainer';
import LoginFormContainer from './components/LoginFormContainer';
import Logout from './components/Logout';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h2>Pictionary</h2>
          {this.props.user.jwt && <Logout />}
          <Route path="/signup" component={SignupFormContainer} />
          <Route path="/login" component={LoginFormContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (props) => {
  return {user: props.user}
}

export default connect(mapStateToProps)(App);
