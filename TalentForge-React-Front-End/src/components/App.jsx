import { useState, useContext } from 'react'
import '../assets/css/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'; // Import the 'NavBar' component
import Footer from './Footer'; // Import the 'Footer' component
import Login from './Login'; // Import the 'Login' component
import HomePage from './HomePage'; // Import the 'HomePage' component
import Profile from './Profile'; // Import the 'Profile' component
import Opportunities from './Opportunities'; // Import the 'Opportunities' component
import UserSearch from './UserSearch'; // Import the 'UserSearch' component
import ViewListing from './ViewListing';
import NewListing from './NewListing'; // Import the 'NewListing' component
import { AuthContext, AuthProvider } from './AuthProvider'

// This will be where components are configured before being sent to main.jsx


const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)
  // const { token, login, logout } = useContext(AuthContext)
  const token = useContext(AuthContext)
  console.log(token)



  function ProfileWrapper() {
    if (token) {
      console.log(token)
      try {
        const payload = token.split('.')[1]
      const decodedPayload = atob(payload)
      const user = JSON.parse(decodedPayload)
      console.log(user._id)
      return <AuthProvider value={{token: token}}><Profile id={user._id} /></AuthProvider>
    } catch (error) {
      console.log(error)
    }
  }
}


  return (
    <>
      <BrowserRouter>
        <div className='flex flex-col min-h-screen'>
          <NavBar />
                        <div className='flex-grow'>
                          <Routes>
                            <Route path='/' element={<AuthProvider><Login /></AuthProvider>} />
                            <Route path='/home' element={<AuthProvider value={{token: token}}><HomePage /></AuthProvider>} />
                            <Route path='/profile/:id' element={<ProfileWrapper />} />
                            {/* <Route path='/network' element={<Network />} /> */}
                            <Route path='/opportunities' element={<Opportunities />} />
                            <Route path='/user-search' element={<UserSearch />} />
                            <Route path='*' element={<h3>Page not found</h3>}/>

                            {/* temp route to view page in development */}
                            <Route path='/listing-temp' element={<ViewListing />} />
                            <Route path='/listing-new' element={<NewListing />} />
                          </Routes>
                        </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App