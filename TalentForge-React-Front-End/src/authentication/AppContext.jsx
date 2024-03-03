import React, { createContext, useContext, useState, useEffect } from 'react'
import { AuthContext, AuthProvider } from "./AuthContext"
import decoder from './decoder'


export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  // Required states for App to function
  const [users, setUsers] = useState([])
  const [listings, setListings] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [currentListing, setCurrentListing] = useState(null)
  const [profileUser, setProfileUser] = useState(null)



      // Once user has token, make fetch requests on mount to get all users and listings
    // Then the identity of the logged in user can be set in the LoggedInUserContext
    useEffect(() =>  {
        const setData = async () => {
            try{
            await fetch('https://talent-forge-api-atu2.onrender.com/users/', {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json}',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }})
                .then(res => res.json())
                .then(data => setUsers(data))
                await fetch('https://talent-forge-api-atu2.onrender.com/listings/', {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json}',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }})
                .then(res => res.json())
                .then(data => setListings(data))
            } catch (error) {
            console.log(error.message)
            }
        }
        setData()

    }, [])

    useEffect(() => {
        const setUser = setTimeout (() => {
            const token = sessionStorage.getItem('token')
            const decodedToken = decoder(token)
            const user = users.find(user => user._id === decodedToken._id)
            console.log(token)
            console.log(decodedToken)
            console.log(user)
            setCurrentUser(user)
        }, 500)
        console.log('setUser useEffect ran')
        console.log(users)
        // setUser()
        return () => clearTimeout(setUser)
    }, [setCurrentUser, users])


      console.log(users)
      console.log(listings)
      console.log(currentUser)




return (
    <AppContext.Provider
        value={{
            allUsers : [users, setUsers],
            allListings : [listings, setListings],
            loggedInUser : [currentUser, setCurrentUser],
            listing : [currentListing, setCurrentListing],
            profile : [profileUser, setProfileUser],
            }}>
        {children}
    </AppContext.Provider>
)
}
