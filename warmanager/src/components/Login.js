import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form>
                    <h3>New World War Manager</h3>
                    <input type="text" id="username" placeholder="Username"></input><br />
                    <input type="password" id="password" placeholder="Password"></input><br />
                    <button type="submit">Log In</button>
                    <button>Create Account</button><br />
                    <a href="">Forgot Password</a>
                </form>
            </div>

        );
    }
}

export default Login;