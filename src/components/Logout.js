import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/userActions'

class Logout extends Component {

  onClick = (event) => {
    this.props.logout()
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Log out</button>
      </div>
    )
  }
}

export default connect(null, { logout })(Logout)
