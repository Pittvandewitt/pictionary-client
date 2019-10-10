import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { USER_LOGIN } from './actions/userActions'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import useStyles from './styles'
import { AppBar, Toolbar } from '@material-ui/core';
import Login from './components/Login';
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
    const classes = this.props.classes;
    return <div>
      <BrowserRouter>
        <div position="fixed">
          <AppBar className={classes.root}>
            <Toolbar>
              {this.props.user.jwt ?
                <Logout /> :
                <Login />}
            </Toolbar>
          </AppBar>
        </div>

        {!this.props.user.jwt && <Route path="/signup" component={SignupFormContainer} />}
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/gameroom/:name" />

        {this.props.user.jwt ?
          <Route exact path="/" component={LobbyContainer} /> :
          <Redirect to='/signup' />}
      </BrowserRouter>
    </div>
  }
}

App = withStyles(App)

const mapStateToProps = (props) => {
  return { user: props.user }
}

export default connect(mapStateToProps)(App);

function withStyles(Component) {
  return function WrappedComponent(props) {
    const classes = useStyles();
    return <Component {...props} classes={classes} />;
  }
}