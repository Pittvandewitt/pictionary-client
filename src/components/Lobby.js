import React from 'react'
import { Link } from 'react-router-dom'
import { Drawer, TextField, Button, List, ListItem, Divider } from '@material-ui/core'
import useStyles from '../styles'

export default function Lobby(props) {
  const { onSubmit, onChange, roomName, rooms } = props

  const classes = useStyles()

  return <Drawer styles={{ zIndex: 1000 }}
    className={classes.drawer}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
    anchor="right">
    <div className={classes.toolbar} />
    <Divider />
    <main className={classes.content}>
      <h2>Lobby</h2>
      <form onSubmit={onSubmit}>
        <TextField type="text"
          name="roomName"
          value={roomName}
          placeholder="Room name"
          onChange={onChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          type='submit'>Create new room</Button>
      </form>
      <List>
        {rooms.map(room => <ListItem><Link key={room.id} to={`/gameRoom/${room.name}`}>{room.name}</Link></ListItem>)}
      </List>
    </main>
  </Drawer>
}
