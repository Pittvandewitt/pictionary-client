import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/userActions'
import { withRouter } from 'react-router'

class Logout extends Component {

  onClick = () => {
    this.props.logout()
    this.props.history.push('/login')
  }

  render() {
    return <div>
      <button onClick={this.onClick}>Log out</button>
    </div>
  }
}

export default withRouter(connect(null, { logout })(Logout))
