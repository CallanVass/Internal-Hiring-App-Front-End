import { useState, useContext } from 'react'
import '../assets/css/App.css'
import { BrowserRouter, Routes, Route, useLocation, useParams } from 'react-router-dom'
import NavBar from './NavBar' // Import the 'NavBar' component
import Footer from './Footer' // Import the 'Footer' component
import Login from './Login' // Import the 'Login' component
import HomePage from './HomePage' // Import the 'HomePage' component
import Profile from './Profile' // Import the 'Profile' component
import Opportunities from './Opportunities' // Import the 'Opportunities' component
import UserSearch from './UserSearch' // Import the 'UserSearch' component
import ViewListing from './ViewListing'
import NewListing from './NewListing' // Import the 'NewListing' component
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
// Temporary function to return user object from user id
  function TempProfileWrapper() {
    const {id} = useParams()

    return <Profile user={id} />
  }


// Layout component from conditional Header render
const Layout = ({ children }) => {
    // Assigning current user location to location
    const location = useLocation()
    // Conditionally show the NavBar unless on login page
    const showNavBar = location.pathname !== '/'

    return (
    <>
        {/* Conditionally render the NavBar unless on login page */}
        {showNavBar && <NavBar />}
        {/* Content to render on other pages */}
        <div className='flex flex-col min-h-screen'>
        <div className='flex-grow'>{children}</div>
        </div>
    </>
    )
}


return (
    <BrowserRouter>
      <div className='flex flex-col min-h-screen'>
        <Routes>
          <Route path='/' element={<AuthProvider><Login /></AuthProvider>} />
          {/* Catch-all route for other pages */}
          <Route path='*' element={
            <Layout>
              {/* Nested Routes for pages that include NavBar */}
              <Routes>
                <Route path='/home' element={<AuthProvider value={{token: token}}><HomePage /></AuthProvider>} />
                {/* <Route path='/profile/:id' element={<ProfileWrapper token={token} />} /> */}
                <Route path='/profile/:id' element={<TempProfileWrapper  />} />
                <Route path='/opportunities' element={<Opportunities />} />
                <Route path='/user-search' element={<UserSearch />} />
                <Route path='/listing-temp' element={<ViewListing />} />
                <Route path='/listing-new' element={<NewListing />} />
                {/* Fallback route for unmatched paths */}
                <Route path='*' element={<h3>Page not found</h3>} />
              </Routes>
            </Layout>
          } />
        </Routes>
        {/* Render Footer on every page */}
        <div className='flex-grow'></div><Footer />
      </div>
    </BrowserRouter>
  )
}

export default App