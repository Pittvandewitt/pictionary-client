import React, { Component } from 'react'
import SignupForm from './SignupForm'
import { baseURL } from '../constants'
import * as request from 'superagent'

export const initialState = {
  email: "",
  password: "",
  username: ""
}

export default class SignupFormContainer extends Component {

  state = { ...initialState }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault()
    request.post(`${baseURL}/signup`)
      .send(this.state)
      .then(request => {
        if (request.statusCode === 200)
          this.props.history.push('/login');
        return console.log(request)
      })
      .catch(console.error)
    this.setState(initialState)
  }

  onClick = () => {
    this.props.history.push('/login')
  }

  render() {
    return (
      <div>
        <SignupForm
          onChange={this.onChange}
          state={this.state}
          onSubmit={this.onSubmit} />
          <button onClick={this.onClick}>Log in</button>
      </div>
    )
  }
}