import React, { Component } from 'react'
import { Button, Container } from '@material-ui/core';
import useStyles from '../styles'
import './Home.css';

export default class Home extends Component {

  login = () => {
    this.props.history.push('/login')
  }

  signup = () => {
    this.props.history.push('/signup')
  }

  render() {
    const classes = this.props.classes;
    return <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Button
          onClick={this.signup}
          fullWidth
          variant="contained"
          color="primary"
          margin="normal"
          className={classes.submit}>Sign up</Button>
        <Button
          onClick={this.login}
          fullWidth
          variant="contained"
          color="primary"
          margin="normal"
          className={classes.submit}>Log in</Button>
      </div>
    </Container>
  }
}

function withStyles(Component) {
  return function WrappedComponent(props) {
    const classes = useStyles();
    return <Component {...props} classes={classes} />;
  }
}

Home = withStyles(Home)