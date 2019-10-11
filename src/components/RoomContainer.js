import React, { Component } from 'react';
import { connect } from 'react-redux';
import { socket } from '../constants';
import Whiteboard from './Whiteboard';

class RoomContainer extends Component {
  state = {
    chatInput: '',
    messages: [
      { sender: 'Server', body: 'Start of the chatroom' }
    ]
  }

  componentDidMount() {
    // Gameroon name
    const roomName = this.props.match.params.name;
    // Add client to socket group
    socket.emit('joinRoom', roomName);
    // Update chat on new message or when player joined
    socket.on('updateChat', (data) => {
      // console.log('Socket data:', data)
      this.setState({
        messages: [...this.state.messages, data]
      })
    })
    // New drawer
    socket.on('newDrawer', (data) => {
      this.props.dispatch({
        type: 'SET_DRAWER',
        payload: data
      })
    })
    // Word to draw
    socket.on('word', (data) => {
      // console.log('Word:', data)
      // console.log('Game msg:', this.refs.gameMsg)
      this.refs.gameMsg.innerHTML = data;
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    socket.emit('newChatMessage',
      {
        roomName: this.props.match.params.name,
        sender: this.props.user.username,
        body: this.state.chatInput
      }
    );
    this.setState({
      chatInput: ''
    })
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return <div style={{ marginTop: "64px", display: "flex", height: "calc(100vh - 70px" }}>
      <div className="left" style={{ width: "calc(100% - 355px)" }}>
        <div className="gameMsg" ref="gameMsg" style={{padding: "10px 0"}}></div>
        <Whiteboard />
      </div>
      <div className="right" style={{ width: "350px", backgroundColor: "#f00" }}>
        <div className="chatMessagesContainer" style={{ height: "calc(100% - 50px", backgroundColor: "#546434", overflow: "scroll" }}>
          {this.state.messages.map(msg => {
            return <div key={msg.body} style={{borderBottom: "1px solid #000000", padding: "10px"}}>
              <h4 style={{margin: "0"}}>{msg.sender}</h4>
              <p style={{margin: "0"}}>{msg.body}</p>
              </div>
          })}
        </div>

        <form onSubmit={this.onSubmit}>
          <input type="text" name="chatInput" value={this.state.chatInput} placeholder="Your message" onChange={this.onChange} />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(RoomContainer);