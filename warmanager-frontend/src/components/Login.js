import React from 'react';

const Login = props => {
    return (
        <>

            <h1>Welcome to New World War Manager!</h1>
            <div className style={{ padding: "5%" }}>
                <form style={{backgroundColor: "lightblue"}, {display: "inline-block"}, {padding: "5%"}}>
                    <input style={{margin: ".5%"}} type="text" placeholder="Username"></input><br />
                    <input style={{margin: ".5%"}} type="password" placeholder="Password"></input><br />
                    <button type="submit">Log In</button>
                </form>
            </div>
        </>
    );
}

export default Login;

