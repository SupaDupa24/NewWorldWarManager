import React from 'react';
import './Login.css';

export default function Login() {
    return (
        <div className="login-wrapper">
            <h1>Welcome to New World War Manager!</h1>
            <div className="form-wrapper">
                <form>
                    <input type="text" placeholder="Username"></input>
                    <input type="password" placeholder="Password"></input>
                    <div>
                        <button type="submit" >Log In</button>
                    </div>
                </form>
            </div>
        </div>
    );
}


