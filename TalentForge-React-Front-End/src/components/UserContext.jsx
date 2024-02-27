import { useState, useEffect, createContext, useContext } from 'react'
// import { BrowserRouter, Routes, Route, useLocation, useParams } from 'react-router-dom'


export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:8003/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  console.log(users)


  return (
    <UserContext.Provider value={{ userArray: users, setUsers }}>
      {children}
    </UserContext.Provider>
  )
}