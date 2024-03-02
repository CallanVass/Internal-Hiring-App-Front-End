/* eslint-disable react/prop-types */
import { useState, useEffect, createContext, useContext } from 'react'
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
import NewUser from './NewUser' // Import the 'NewUser' component
import { AuthContext, AuthProvider } from '../authentication/AuthContext'

import decoder from '../authentication/decoder'



export const ContextWrapper = createContext()

const App = () => {
  // Required states for App to function
  const [users, setUsers] = useState([])
  const [listings, setListings] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [currentListing, setCurrentListing] = useState(null)
  const [profileUser, setProfileUser] = useState(null)
  



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

//const = {allUsers, allListings, loggedInUser, listing, profile} = useContext(ContextWrapper)

return (
  <AuthProvider>
    <ContextWrapper.Provider
      value={{
        allUsers : [users, setUsers],
        allListings : [listings, setListings],
        loggedInUser : [currentUser, setCurrentUser],
        listing : [currentListing, setCurrentListing],
        profile : [profileUser, setProfileUser] }}>
    <BrowserRouter>
      <div className='flex flex-col min-h-screen'>
        <Routes>
          <Route path='/' element={<Login />} />
          {/* Catch-all route for other pages */}
          <Route path='*' element={
            <Layout>
              {/* Nested Routes for pages that include NavBar */}
              <Routes>

                <Route path='/home' element={<HomePage />} />
                <Route path='/profile/:id' element={<Profile />} />
                <Route path='/opportunities' element={<Opportunities />} />
                <Route path='/user-search' element={<UserSearch />} />

                {/* <Route path='/listings/:id' element={<ListingContext.Provider value={currentListing}/>} /> {console.log(currentListing)} */}
                <Route path='/listings/:id' element={<ViewListing />} />
              <Route path='/listing-new' element={<NewListing />} />
              <Route path='/user-new' element={<NewUser />} />
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
    </ContextWrapper.Provider>
</AuthProvider>
  )
}

export default App