// AuthContext allows access based on a valid token being present
// The login/logout functions are used to set and remove the token from sessionStorage
// It can also return the token to the caller
import React, { createContext, useState, useEffect } from 'react';
import decoder from './decoder';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [currentUserIdString, setCurrentUserIdString] = useState(null);


    // Occurs when the component mounts
    useEffect(() => {
        const token = sessionStorage.getItem('token')
        console.log('The useEffect in AuthContext.jsx is running')
        if (token) {
            setToken(token)
        }
    }, [])

    // eslint-disable-next-line no-unused-vars
    const login = (newToken) => {
        sessionStorage.setItem('token', newToken)
        setToken(newToken)
        // console.log(token) // Provides the token
        // console.log(AuthContext) //Provides the context (ie. an symbol.React object)
      }

    // eslint-disable-next-line no-unused-vars
    const logout = () => {
        sessionStorage.removeItem('token')
        setToken(null)
    }


    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}