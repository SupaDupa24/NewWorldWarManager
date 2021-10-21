import React from 'react';
import './index.css';

const Login = props => {
    return (
        <>
            <h1>Welcome to New World War Manager!</h1>
            <input className="usrLogin" type="text" placeholder="Username"></input><br />
            <input className="usrLogin" type="password" placeholder="Password"></input><br />
            <button type="submit">Log In</button>
        </>
    );
}

export default Login;

