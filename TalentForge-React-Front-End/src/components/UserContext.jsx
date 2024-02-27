import { useState, useEffect, createContext, useContext } from 'react'
// import { BrowserRouter, Routes, Route, useLocation, useParams } from 'react-router-dom'


export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([{
    "_id": "65dd2ca89d0a768b6605a4b3",
    "firstName": "Adam",
    "lastName": "Andrews",
    "email": "adam@email.com",
    "password": "$2b$08$SHqnZN3OS2/FKd8NYtP6S.TdBJwIVyDZfMfWfxeYHngK0m/Z8zziC",
    "role": "Recruitment Manager",
    "department": "Human Resources",
    "image": "./misc/male_user_image.jpeg",
    "admin": true,
    "applications": [],
    "__v": 0
  }])

  useEffect(() => {
    fetch('http://localhost:8003/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  console.log(users)


  return (
    <UserContext.Provider value={{ users }}>
      {children}
    </UserContext.Provider>
  )
}