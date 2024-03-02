import React, { useState, useEffect, createContext, useContext } from "react"
import ViewListing from "./ViewListing"
import { useNavigate } from 'react-router-dom'
import { AppContext, AppContextProvider } from '../authentication/AppContext'
import Fuse from "fuse.js" // Import Fuse.js library


// export const ListingContext = createContext()

const JobListing = () => {
  const { allListings, listing } = useContext(AppContext)
  const [listings, setListings] = allListings
  const [currentListing, setCurrentListing] = listing

  const nav = useNavigate()

  console.log(listings)

  const [selectedDepartment, setSelectedDepartment] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredListings, setFilteredListings] = useState([...listings])

  // Function to handle department selection
  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value)
  }

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  // Effect to update filtered listings when searchQuery or selectedDepartment changes
  useEffect(() => {
    let newFilteredListings = [...listings]

    if (selectedDepartment !== "All") {
      newFilteredListings = newFilteredListings.filter((listing) => listing.department === selectedDepartment)
    }

    if (searchQuery.trim() !== "") {
      const fuseOptions = {
        keys: ["title", "department"], // Search in 'title' and 'department' fields
        includeScore: true,
      }
      const fuse = new Fuse(newFilteredListings, fuseOptions)
      const searchResult = fuse.search(searchQuery.trim())
      newFilteredListings = searchResult.map((result) => result.item)
    }

    setFilteredListings(newFilteredListings)
  }, [searchQuery, selectedDepartment, listings])


  function listingClick(listing) {
    nav(`/listings/${listing._id}`)
    // nav('/opportunities')
    console.log(listing)
    console.log(listing._id)
    setCurrentListing(listing)
  }

  document.title = "Opportunities"

  return (
    <div className="bg-white mx-6 my-6 md:my-12 lg:my-24 p-6 md:p-10 lg:p-16 xl:mx-96">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-3 flex items-center justify-center">
          <h2 className="text-3xl font-semibold mt-8 mb-4">Internal Opportunities</h2>
        </div>
        <div className="md:col-span-1 flex flex-col justify-start items-center md:items-start">
          <div className="w-full">
            <label htmlFor="department" className="block text-gray-700">
              Filter by Department:
            </label>
            <select
              id="department"
              value={selectedDepartment}
              onChange={handleDepartmentChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="All">All Departments</option>
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
              <option value="Human Resources">Human Resources</option>
              <option value="IT">Information Technology</option>
            </select>
          </div>
          <div className="mt-4 w-full">
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="md:col-span-2 mb-8">
          <div className="grid grid-cols-1 gap-6">
            {filteredListings.map((listing) => (
              <div key={listing._id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-4"
                  onClick={() => {
                    listingClick(listing)
                    }}>
                  <h2 className="text-xl text-center font-medium text-gray-900">{listing.title}</h2>
                  <p className="text-base text-center">{listing.department}</p>
                  <p className="text-base mt-2">{listing.roleType}</p>
                  <p className="text-base mt-2">{listing.location}</p>
                  <p className="text-base mt-2">Salary: {`$${listing.salary}`}</p>   {/* Look at currency formatting: $100,000*/}
                  <p className="text-base mt-2">Posted Date: {listing.datePosted}</p> {/* Date/time formatting */}
                  <p className="text-base mt-2">Job Description: {listing.description.text}</p>
                  <div className="flex justify-center">
                    <button className="bg-dark-blue hover:bg-washed-blue text-white font-bold py-2 px-4 rounded mt-4">
                      Apply Now
                    </button>
                  </div>
                  {/* Add more job details as needed */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
