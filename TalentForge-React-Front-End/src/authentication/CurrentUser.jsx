import { useState, useEffect } from 'react'
import { AuthProvider } from "./AuthContext"
import decoder from './decoder'

// This method can be called whenever the app needs to know the current user 
export default function CurrentUser () {
  const [users, setUsers] = useState([]) // This state object is for ALL users
  const token = decoder(AuthProvider.token)
  // Get all users in DB
  useEffect(() => {

      try {
        fetch('http://localhost:8002/users')
          .then(res => res.json())
          .then(data => setUsers(data))
      } catch (error) {
        fetch('http://172.31.190.165:8003/users')
          .then(res => res.json())
          .then(data => setUsers(data))
      }
    }, [])

    return users?.find(user => user._id === token)
  }