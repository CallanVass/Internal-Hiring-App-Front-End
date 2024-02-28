import React, { useState, createContext, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import '../assets/css/Login.css'
import HomePage from './HomePage' // Import the 'HomePage' component
import { AuthContext, AuthProvider } from "../authentication/AuthContext"
import { UserContext } from '../authentication/UserContext'
import decoder from '../authentication/decoder'
// Fake changes to file!

const Login = () => {
    const [username, setUsername] = useState("") // Note: username is an email
    const [password, setPassword] = useState("")
    const [userNotFound, setUserNotFound] = useState('no')
    const { login } = useContext(AuthContext)
    const nav = useNavigate()
    IncorrectCredentials(false)



    // Get username and password from form
    async function checkCredentials(e) {
      IncorrectCredentials(false)
        const loginCredentials = {
            email: username,
            password: password
        }

        if (username && password) {
            e.preventDefault();

            const res = await fetch('http://localhost:8002/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginCredentials)
            })
            const response = await res.json() // This is token or server response
            // If token is present in the response, redirect to homepage
            if (response.token) {
                // Store the token in sessionStorage (AuthContext manages this)
                login(response.token)
                console.log(response.token)
                // decoder function returns user id from token
                let user = decoder(response.token)
                // Store user in UserContext
                user = createContext(UserContext)
                // Redirect to homepage
                nav('/home')
            } else {
                // Display message on login screen 'email or password is incorrect'
                // Set username and password fields to blank
                console.log(userNotFound)
                setUserNotFound('yes')
                IncorrectCredentials()
                setUsername("")
                setPassword("")
                console.log({"Server response code": await res.statusCode})
            }

        } else {
            // Alert is shown if username or password is not entered
            e.preventDefault();
            alert("Please enter an email and password");
        }
    }

    function IncorrectCredentials() {
      console.log(userNotFound)

      if (userNotFound === 'yes') {
        return <p className="text-red-600 text-base">Incorrect username or password <br/>- please try again</p>
      }

      if (userNotFound === 'no') {
        null
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
            <form onSubmit={checkCredentials} onChange={() => setUserNotFound('no')}>
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
            <IncorrectCredentials />
            <div className="py-4 h-12 ">
              {/* <p className="text-red-600 text-base">Incorrect username or password <br/>- please try again</p> */}
            </div>
            <div className="py-6">
                <p>Not registered? Contact your HR<br/>department to be set up</p>

            </div>

          </div>
        </>

      );
    };

export default Login;
