import React from 'react';

const Login = props => {
    return (
        <>
            <h1>Welcome to New World War Manager!</h1>
            <input id="usrLogin" type="text" placeholder="Username"></input><br />
            <input id="usrLogin" type="password" placeholder="Password"></input><br />
            <button type="submit">Log In</button>
        </>
    );
}

export default Login;

