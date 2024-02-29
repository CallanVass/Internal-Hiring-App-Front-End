import decoder from './decoder'
import App from '../components/App'

// This method can be called whenever the app needs to know the current user
export default async function CurrentUser () {
  const users = App.users // This state object is for ALL users
  let user
  const token = decoder(sessionStorage.getItem('token'))
  console.log(sessionStorage.getItem('token'))
  console.log(token)

  // Get all users in DB
  if (users) {
    user = users.find(user => user._id === token)
  } else {
    user = null
  }


    console.log(user)
}