import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';

class LoginFormContainer extends Component {
    state = {
        email: '',
        password: ''
    }

    onSubmit = (event) => {
        event.preventDefault()
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() { 
        return (
            (this.props.user.jwt) ? 
                <Redirect to="/" /> 
            : 
                <LoginForm 
                    values={this.state}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
 
export default connect(mapStateToProps)(LoginFormContainer);