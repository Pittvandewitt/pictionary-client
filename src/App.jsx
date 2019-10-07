import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SignupFormContainer from './components/SignupFormContainer';
import LoginFormContainer from './components/LoginFormContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          Pictionary
          <Route path="/signup" component={SignupFormContainer} />
          <Route path="/login" component={LoginFormContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
