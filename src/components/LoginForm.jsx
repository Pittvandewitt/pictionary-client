import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import useStyles from './styles';

function LoginForm(props) {

  const classes = useStyles()

  const { onSubmit, onChange, values, user } = props;
  const { email, password } = values;
  return <Container component="main" maxWidth="xs" >
    <React.Fragment className={classes.paper}>
      {user.error && <p>{user.error}</p>}
      <form onSubmit={onSubmit} className={classes.form}>
        <TextField type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={onChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth />
        <TextField type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={onChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth />
        <Button type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}>Log in</Button>
      </form>
    </React.Fragment>
  </Container>
}

export default LoginForm;