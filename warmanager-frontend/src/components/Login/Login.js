import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:3300/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

//The Component
export default function Login({ setToken }) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });

        if (!token.token) {
            console.log('No token created');

        } else {
            console.log('Token created');
            setToken(token);
            sessionStorage.setItem("token", token.token);
        }
    }

    function signUp() {
        return (
            console.log('sign up clicked')
        );
    }

    return (
        <div className="login-wrapper">
            <h1>Welcome to New World War Manager!</h1>
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="form-side">
                        <label>
                            <p>UserName</p>
                            <input type="text" id="username" placeholder="ZodBlaze01" required onChange={e => setUserName(e.target.value)} />
                        </label>
                        <label>
                            <p>Password</p>
                            <input type="password" placeholder="DoomSlayer92" required onChange={e => setPassword(e.target.value)} />
                        </label>
                        <div>
                            <button type="submit">Log In</button>
                        </div>
                    </div>
                    <div className="form-side">
                        <div>
                            <button type="button" id="signup" onClick={signUp}>Sign Up!</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}


