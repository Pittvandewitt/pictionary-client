import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SignupFormContainer from './components/SignupFormContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          Pictionary
        <Route path="/signup" component={SignupFormContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
