import React, { Component } from 'react'
import './Home.css';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

class Home extends Component {

  render() {
    return this.props.user.jwt ? <Redirect to='/' /> : <Redirect to='/signup' />
  }
}

const mapStateToProps = (props) => {
  return { user: props.user }
}

export default connect(mapStateToProps)(Home)