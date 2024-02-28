import React, { useState, createContext, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';
import HomePage from './HomePage' // Import the 'HomePage' component
import { AuthContext, AuthProvider } from "./AuthContext";

// const AuthContext = createContext()


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
            const response = await res.json() // This is token or server response
            // If token is present in the response, redirect to homepage
            if (response.token) {
                // Store the token in sessionStorage
                // sessionStorage.setItem('token', response.token)
                // Sets the token in context using AuthProvider
                // AuthProvider.login(response.token)
                {/* nav(`/home`) // Add token to local storage?? */}
                return <AuthContext.Provider value={{ token: response.token }}>
                        <HomePage />
                      </AuthContext.Provider>
            } else {
                // Obtain status code from server response
                // Display message on login screen 'email or password is incorrect'

                console.log({"Server response code": await res.statusCode})
            }

        } else {
            // Alert is shown if username or password is not entered
            e.preventDefault();
            alert("Please enter an email and password");
        }
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
