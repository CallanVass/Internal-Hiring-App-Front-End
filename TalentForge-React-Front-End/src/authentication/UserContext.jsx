import React, { createContext, useState, useEffect } from 'react'

export  const UserContext = createContext()

// Is a function required here?
// Attempting a different method to keep track of the user - a simple function
// which users the token (stored in context) and decodes it to get the user id
export function UserContextProvider() {
    const [user, setUser] = useState(null)


    return <UserContext.Provider value={ user }></UserContext.Provider>

}
