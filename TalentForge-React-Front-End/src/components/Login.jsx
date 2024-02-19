import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Login = () => {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const nav = useNavigate();

    function checkCredentials(e) {
        if (username && password) {
            e.preventDefault();
            // Find username in database
            console.log("Username: ", username);

            // Check matching password in database
            console.log("Password: ", password);

            // If username and password match, redirect to homepage
            nav(`/home`)

            // else:
            // If username and password do not match, alert user
        } else {
            e.preventDefault();
            alert("Please enter a username and password");
        }

    }

    return (
        <>
            <div className="login">
                <img src="src/assets/talent_forge_logo.jpg" alt="talent forge logo" width="200" height="200"/>
                <form onSubmit={checkCredentials}>
                    <label>Username: </label>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                </form>

            </div>
        </>
    )
}

export default Login;
