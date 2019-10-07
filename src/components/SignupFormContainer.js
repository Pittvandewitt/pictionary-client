import React, { Component } from 'react'
import SignupForm from './SignupForm'
import { url } from '../constants'
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
    request.post(`${url}/signup`)
      .send(this.state)
      .then(request => console.log(request))
      .catch(console.error)
    this.setState(initialState)
  }

  render() {
    return (
      <div>
        <SignupForm
         onChange={this.onChange} 
         state={this.state}
         onSubmit={this.onSubmit} />
      </div>
    )
  }
}
