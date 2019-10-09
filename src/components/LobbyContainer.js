import React, { Component } from 'react'
import Lobby from './Lobby'
import * as request from 'superagent'
import { connect } from 'react-redux'
import { baseURL, socket } from '../constants'

class LobbyContainer extends Component {

  state = {
    rooms: [],
    roomName: ''
  }

  componentDidMount() {
    request.get(`${baseURL}/rooms`)
      .set('Authorization', `Bearer ${this.props.user.jwt}`)
      .then(({ body }) => this.setState({ rooms: body }))
      .catch(error => console.error(error.response.body.message))
    socket.on('addRoom', (data) => {
      this.setState({ rooms: [...this.state.rooms, data], roomName: '' })
    })
  }

  onClick = (event) => {
    // enter a room
    console.log('enterRoom', event.target)
    {/* add router with /roomname endpoint */ }
    // router.
  }

  onSubmit = (event) => {
    event.preventDefault()

    request.post(`${baseURL}/rooms`)
      .set('Authorization', `Bearer ${this.props.user.jwt}`)
      .send({ name: this.state.roomName })
      .catch(error => console.error(error.response.body.message))
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return <div>
      <Lobby
        rooms={this.state.rooms}
        roomName={this.state.roomName}
        onClick={this.onClick}
        onChange={this.onChange}
        onSubmit={this.onSubmit} />
    </div>
  }
}

const mapStateToProps = (reduxState) => {
  return {
    rooms: reduxState.rooms,
    user: reduxState.user
  }
}

export default connect(mapStateToProps)(LobbyContainer)