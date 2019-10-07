import React, { Component } from 'react';

class LoginForm extends Component {
    render() {
        const { onSubmit, onChange, values, user } = this.props;
        const { email, password } = values;
        return (
            <React.Fragment>
                {user.error && <p>{user.error}</p>}
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
            </React.Fragment>
        );
    }
}

export default LoginForm;