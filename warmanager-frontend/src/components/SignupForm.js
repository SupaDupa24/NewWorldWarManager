import React from 'react';

const SignupForm = props => {
    return (
        <>
            <h1>Create your account</h1>
            <input type="text" placeholder="Username"></input><br />
            <input type="email" placeholder="Email"></input><br />
            <input type="password" placeholder="Password"></input><br />
            <button type="submit">Create Account</button>
        </>
    );
}

//http://localhost:3300/api/auth

export default SignupForm;

