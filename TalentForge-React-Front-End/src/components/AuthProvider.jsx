import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    console.log(token) // Test to check the token is being set

    // Test to check the decoding method works
    try{
      const payload = token.split('.')[1]
      const decodedPayload = atob(payload)
      const user = JSON.parse(decodedPayload)
      console.log(user._id)
    } catch (error) {
        console.log(error)
    }
    // End test

    useEffect(() => {
        const token = sessionStorage.getItem('token')
        if (token) {
            setToken(token)
        }
    }, [])

    // eslint-disable-next-line no-unused-vars
    const login = (newToken) => {
        sessionStorage.setItem('token', newToken)
        setToken(newToken)
      }

    // eslint-disable-next-line no-unused-vars
    const logout = () => {
        sessionStorage.removeItem('token')
        setToken(null)
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};