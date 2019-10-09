import React from 'react'

export default function Lobby(props) {
  const { onSubmit, onChange, onClick, roomName, rooms } = props

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
      {rooms.map(room => <button key={room.name} onClick={onClick}>{room.name}</button>)}
    </div>
  </div>
}
