// This module provides a function to obtain the user and token and return matching status to the caller
// If the user is an admin, the function returns true
// If the profile's user id is the same as the token, the function returns true otherwise it returns false
import CurrentUser from './CurrentUser'


export default function Auth(profileUserId) {
  const token = sessionStorage.getItem('token')
  const currentUser = CurrentUser() // Returns user object or null

  // const tokenDecode = decoder(token)
  console.log(currentUser)
  console.log(token)
  console.log(profileUserId)

  let match

    if (currentUser?.isAdmin === true) {
      match = true
    } else if (profileUserId === currentUser._id) {
      match = true
    } else {
      match = false
    }

  return match
}
