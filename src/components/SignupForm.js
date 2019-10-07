import React from 'react'

export default function SignupForm(props) {

  return <form onSubmit={props.onSubmit}>

    <input
      name="email"
      type="text"
      onChange={props.onChange}
      value={props.state.email}
      placeholder='Email' />

    <input
      name="password"
      type="password"
      onChange={props.onChange}
      value={props.state.password}
      placeholder='Pasword' />

    <input
      name="username"
      type="text"
      onChange={props.onChange}
      value={props.state.username}
      placeholder='Username' />

    <button type="submit">Sign up</button>

  </form>
}
