import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import { withRouter } from 'react-router'

class Login extends Component {

  onClick = () => {
    this.props.history.push('/login')
  }
  
  render() {
    return (
      <div>
        <Button color="inherit" onClick={this.onClick}>Log in</Button>
      </div>
    )
  }
}

export default withRouter(Login)
