import React from 'react';

const Login = props => {
    return (
        <>

            <h1>Welcome to New World War Manager!</h1>
            <div className style={{ background: "#9DA9A3" }, { padding: "5%" }}>
                <form>
                    <input style={{margin: "1%"}} type="text" placeholder="Username"></input><br />
                    <input style={{margin: "1%"}} type="password" placeholder="Password"></input><br />
                    <button type="submit">Log In</button>
                </form>
            </div>
        </>
    );
}

export default Login;

