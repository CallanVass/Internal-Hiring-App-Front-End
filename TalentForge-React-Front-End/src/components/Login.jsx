import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';



const Login = () => {
    const [username, setUsername] = useState(""); // Note: username is an email
    const [password, setPassword] = useState("");

    const nav = useNavigate();

    // Get username and password from form


    async function checkCredentials(e) {

        const loginCredentials = {
            email: username,
            password: password
        }

        if (username && password) {
            e.preventDefault();

            const res = await fetch('http://localhost:8003/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginCredentials)
            });
            const response = await res.json() // This will be the token
            // If token is present in the response, redirect to homepage
            if (response.token) {
                nav(`/home`)
            } else {
                // navigate to error page...
                console.log(response)
            }

        } else {
            e.preventDefault();
            alert("Please enter an email and password");
        }


      // else:
      // If username and password do not match, alert user
    } else {
      e.preventDefault();
      alert("Please enter a username and password");
    }


    return (
        <>
          <div className="flex-col text-center">
            <img
              className="m-2 inline"
              src="src/assets/logos/talent_forge_logo.jpg"
              alt="talent forge logo"
              width="200"
              height="200"
            />
            <form onSubmit={checkCredentials}>
              <span className="block m-3">
                <label htmlFor="username" className="">Username: </label>
                <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              </span>
              <span className="block m-5">
                <label htmlFor="password" className="m-1">Password: </label>
                <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </span>
              <button
                type="submit"
                title="login-btn"
                className="bg-grey hover:bg-dark-blue text-dark-blue font-semibold hover:text-white m-2 py-1 px-5 border border-blue-500 hover:border-transparent rounded"
              >
                Login
              </button>
            </form>
            <p className="pt-6">Not registered? Contact your HR </p>
            <p>department to be set up</p>
          </div>
        </>

      );
    };

export default Login;
