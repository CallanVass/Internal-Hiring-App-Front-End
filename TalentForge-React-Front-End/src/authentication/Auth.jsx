// This module provides a function to obtain the user and token and return matching status to the caller
// If the user is an admin, the function returns true
// If the profile's user id is the same as the token, the function returns true
// Needs re-work to not use UserContext
import { useContext } from 'react'
import { UserContext } from '../authentication/UserContext'
import decoder from './decoder'


export default function Auth(profileUserId) {
  const token = sessionStorage.getItem('token')
  const currentUser = useContext(UserContext)

  const tokenDecode = decoder(token)
  console.log(currentUser)
  console.log(tokenDecode)
  console.log(profileUserId)

  let match

    // if (currentUser.isAdmin === true) {

      // match = true
    if (profileUserId === tokenDecode._id) {
      match = true
    } else {
      match = false
    }

  return match
}
