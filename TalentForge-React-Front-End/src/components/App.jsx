import { useState, useEffect, createContext } from "react";
import "../assets/css/App.css";
import { BrowserRouter, Routes, Route, useLocation, useParams } from "react-router-dom";
import NavBar from "./NavBar"; // Import the 'NavBar' component
import Footer from "./Footer"; // Import the 'Footer' component
import Login from "./Login"; // Import the 'Login' component
import HomePage from "./HomePage"; // Import the 'HomePage' component
import Profile from "./Profile"; // Import the 'Profile' component
import Opportunities from "./Opportunities"; // Import the 'Opportunities' component
import UserSearch from "./UserSearch"; // Import the 'UserSearch' component
import ViewListing from "./ViewListing";
import NewListing from "./NewListing"; // Import the 'NewListing' component
import NewEmployee from "./NewEmployee"; // Import the 'NewUser' component
import { AuthContext, AuthProvider } from "../authentication/AuthContext";
import CurrentUser from "../authentication/CurrentUser";

// This will be where components are configured before being sent to main.jsx

export const ProfileContext = createContext();

const App = () => {
  /*
Authorise user process:
1. User logs in (token is generated)
2. User is redirected to home page
3. User navigates to profile page
  - User id is extracted from token and placed in the URL
4. Profile page is rendered with user details
  - Conditional rendering of edit button if user id matches token id
  - Conditional rendering of job applications if user id matches token id
*/

  // Function to render Profile page with user id in the URL
  // Required to view profile until we are able to get user id out of the decoded token
  function ProfileWrapper() {
    let user = CurrentUser();
    // AssignUser(user) // Assign user to context
    // setCurrentUser(user) // Assign user to state

    // This return statement sets the Profile context to be the user in the URL
    return user ? (
      <ProfileContext.Provider value={user}>
        <Profile user={user} />
      </ProfileContext.Provider>
    ) : (
      <p>User not found</p>
    );
  }

  // Layout component from conditional Header render
  const Layout = ({ children }) => {
    // Assigning current user location to location
    const location = useLocation();
    // Conditionally show the NavBar unless on login page
    const showNavBar = location.pathname !== "/";

    return (
      <>
        {/* Conditionally render the NavBar unless on login page */}
        {showNavBar && <NavBar />}
        {/* Content to render on other pages */}
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">{children}</div>
        </div>
      </>
    );
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<Login />} />
            {/* Catch-all route for other pages */}
            <Route
              path="*"
              element={
                <Layout>
                  {/* Nested Routes for pages that include NavBar */}
                  <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/profile/:id" element={<ProfileWrapper />} />
                    <Route path="/opportunities" element={<Opportunities />} />
                    <Route path="/user-search" element={<UserSearch />} />
                    <Route path="/listing-temp" element={<ViewListing />} />
                    <Route path="/listing-new" element={<NewListing />} />
                    <Route path="/user-new" element={<NewEmployee />} />
                    {/* Fallback route for unmatched paths */}
                    <Route path="*" element={<h3>Page not found</h3>} />
                  </Routes>
                </Layout>
              }
            />
          </Routes>
          {/* Render Footer on every page */}
          <div className="flex-grow"></div>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
