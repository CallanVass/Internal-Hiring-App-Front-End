import { useState } from 'react'
import '../assets/css/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'; // Import the 'NavBar' component
import Footer from './Footer'; // Import the 'Footer' component
import Login from './Login'; // Import the 'Login' component
import HomePage from './HomePage'; // Import the 'HomePage' component
import Profile from './Profile'; // Import the 'Profile' component
import Opportunities from './Opportunities'; // Import the 'Opportunities' component
import UserSearch from './UserSearch'; // Import the 'UserSearch' component
import Network from './Network';
import ViewListing from './ViewListing';
import NewListing from './NewListing'; // Import the 'NewListing' component


// This will be where components are configured before being sent to main.jsx


function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <div className='flex flex-col min-h-screen'>
          <NavBar />
                        <div className='flex-grow'>
                          <Routes>
                            <Route path='/' element={<Login />} />
                            <Route path='/home' element={<HomePage />} />
                            <Route path='/profile' element={<Profile />} />
                            <Route path='/network' element={<Network />} />
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