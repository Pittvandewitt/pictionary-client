import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/userActions'
import { withRouter } from 'react-router'
import { Button } from '@material-ui/core'

class Logout extends Component {

  onClick = () => {
    this.props.logout()
    this.props.history.push('/login')
  }

  render() {
    return <div>
      <Button color="inherit" onClick={this.onClick}>Log out</Button>
    </div>
  }
}

export default withRouter(connect(null, { logout })(Logout))
