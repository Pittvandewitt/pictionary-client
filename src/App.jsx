import React, { Component } from 'react';
import { connect } from 'react-redux'
import { USER_LOGIN } from './actions/userActions'
import { BrowserRouter, Route } from 'react-router-dom';
import useStyles from './styles'
import { AppBar, Toolbar } from '@material-ui/core';
import Login from './components/Login';
import SignupFormContainer from './components/SignupFormContainer';
import LoginFormContainer from './components/LoginFormContainer';
import Logout from './components/Logout';
import LobbyContainer from './components/LobbyContainer';
import Home from './components/Home';
import RoomContainer from './components/RoomContainer';

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
    return <div className={!this.props.user.jwt && 'css'}>
      <BrowserRouter>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            {this.props.user.jwt ? <Logout /> : <Login />}
          </Toolbar>
        </AppBar>

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
        <Route path="/gameroom/:name" component={RoomContainer} />

        {this.props.user.jwt ?
          <Route exact path="/" component={LobbyContainer} /> :
          <Route exact path="/" component={Home} />}
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