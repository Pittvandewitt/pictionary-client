import React from 'react'
import { Link } from 'react-router-dom'

export default function Lobby(props) {
  const { onSubmit, onChange, roomName, rooms } = props

  return <div>
    <h2>Lobby</h2>
    <form onSubmit={onSubmit}>
      <input type="text"
        name="roomName"
        value={roomName}
        placeholder="Room name"
        onChange={onChange} />
      <button type='submit'>Create new room</button>
    </form>
    <ul>
      {rooms.map(room => <li><Link key={room.id} to={`/gameRoom/${room.name}`}>{room.name}</Link></li>)}
    </ul>
  </div>
}
