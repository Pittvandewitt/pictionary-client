import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import useStyles from './styles';

export default function SignupForm(props) {

  const classes = useStyles()

  return <Container component="main" maxWidth="xs" >
    <div className={classes.paper}>
      <form onSubmit={props.onSubmit} className={classes.form}>

        <TextField
          name="email"
          type="text"
          onChange={props.onChange}
          value={props.state.email}
          placeholder='Email'
          variant="outlined"
          margin="normal"
          required
          fullWidth />

        <TextField
          name="password"
          type="password"
          onChange={props.onChange}
          value={props.state.password}
          placeholder='Pasword'
          variant="outlined"
          margin="normal"
          required
          fullWidth />

        <TextField
          name="username"
          type="text"
          onChange={props.onChange}
          value={props.state.username}
          placeholder='Username'
          variant="outlined"
          margin="normal"
          required
          fullWidth />

        <Button type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}>Sign up</Button>

      </form>
    </div>
  </Container>
}
