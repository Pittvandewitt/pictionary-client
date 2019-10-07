import React, { Component } from 'react';

class LoginForm extends Component {
    render() {
        const { onSubmit, onChange, values } = this.props;
        const { email, password } = values; 
        return (
            <form onSubmit={onSubmit}>
                <input type="text" 
                    name="email" 
                    value={email} 
                    placeholder="Email"
                    onChange={onChange}
                /> 
                <input type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={onChange}
                />
                <button type="submit">Log in</button>
            </form>
        );
    }
}
 
export default LoginForm;