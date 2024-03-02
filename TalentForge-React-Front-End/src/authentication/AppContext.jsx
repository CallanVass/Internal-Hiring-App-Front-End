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
    // Is await required here?
    useEffect(() =>  {
        const setData = async () => {
            try{
            await fetch('http://localhost:8002/users/', {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json}',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }})
                .then(res => res.json())
                .then(data => setUsers(data))
                await fetch('http://localhost:8002/listings/', {
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


    const setUser = async (userID) => {
        const user = await users.find(user => user._id === userID)
        setCurrentUser(user)
    }

    const setProfile = (userID) => {
        const user = users.find(user => user._id === userID)
        setProfileUser(user)
    }

    const setListing = (listingID) => {
        const currentListing = listings.find(listing => listing._id === listingID)
        setCurrentListing(currentListing)
    }


      console.log(users)
      console.log(listings)
      console.log(currentUser)




return (
    <AppContext.Provider
        // value={{
        //     allUsers : [users, setUsers],
        //     allListings : [listings, setListings],
        //     loggedInUser : [currentUser, setCurrentUser],
        //     listing : [currentListing, setCurrentListing],
        //     profile : [profileUser, setProfileUser],
        //     }}>
        value={{
            allUsers : [users, setUsers],
            allListings : [listings, setListings],
            loggedInUser : [currentUser, setCurrentUser],
            listing : [currentListing, setCurrentListing],
            profile : [profileUser, setProfileUser],
            setUser,
            setProfile,
            setListing
            }}>
        {children}
    </AppContext.Provider>
)
}
