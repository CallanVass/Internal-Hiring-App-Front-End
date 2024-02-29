import { useState, useEffect } from 'react'
import { AuthProvider } from "./AuthContext"
import decoder from './decoder'

// This method can be called whenever the app needs to know the current user
export default async function CurrentUser () {
  const [users, setUsers] = useState([]) // This state object is for ALL users
  console.log("Line 8 of CurrentUser.jsx")
  const token = decoder(sessionStorage.getItem('token'))
  console.log(sessionStorage.getItem('token'))

  console.log(token)
  // Get all users in DB
  useEffect(() => {

    try {
      fetch('http://localhost:8002/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(data => setUsers(data))
    } catch (error) {
      fetch('http://172.31.190.165:8003/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(data => setUsers(data))
    }
  }, [])



    console.log(users)

    return users
  }