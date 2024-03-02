import React, { createContext, useState, useEffect } from 'react';


export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  // Required states for App to function
  const [users, setUsers] = useState([])
  const [listings, setListings] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [currentListing, setCurrentListing] = useState(null)
  const [profileUser, setProfileUser] = useState(null)


return (
    <AppContext.Provider
        value={{
            allUsers : [users, setUsers],
            allListings : [listings, setListings],
            loggedInUser : [currentUser, setCurrentUser],
            listing : [currentListing, setCurrentListing],
            profile : [profileUser, setProfileUser]
            }}>
        {children}
    </AppContext.Provider>
)
}
