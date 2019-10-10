import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions/userActions';
import LoginForm from './LoginForm';

class LoginFormContainer extends Component {
  state = {
    email: '',
    password: ''
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state);
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      this.props.user.jwt ?
        <Redirect to="/" /> :
        <div>
          <LoginForm
            values={this.state}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            user={this.props.user} />
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { login })(LoginFormContainer)