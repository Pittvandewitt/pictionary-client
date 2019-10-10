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
    <div>
      {rooms.map(room => <Link key={room.id} to={`/gameRoom/${room.name}`}>{room.name}</Link>)}
    </div>
  </div>
}
