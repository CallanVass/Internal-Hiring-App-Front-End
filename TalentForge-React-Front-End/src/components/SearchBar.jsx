import React, { useState } from 'react'
import Fuse from 'fuse.js'

// Recieve users props to SearchBar from UserSearch
const SearchBar = ({ users }) => {

// Set query state to empty string
const [query, setQuery] = useState('')
// Set result state to empty list
const [results, setResults] = useState([])

// Create Fuse object, including keys for items that can be found
const fuse = new Fuse(users, {
    keys: [
        "department",
        "name",
        "role",
        "aboutMe.text",
        "aboutMe.careerDevelopment"
    ],
    includeScore: true,
})

// handleSearch function
const handleSearch = (e) => {
    // Set state to typed value
    setQuery(e.target.value)
    // If value > 2
    if (e.target.value.length > 2) {
      // Create result variable from typed variable
      const result = fuse.search(e.target.value)
      // Rerender component with result variable
      setResults(result)
    } else {
      // Else set results to empty list
      setResults([])
    }
  }

  return (
    <div>
        <div className="flex justify-center items-center">
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mb-10"
            />
        </div>
        <div>
            {results.map((result, index) => (
                <div key={index} className="border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 bg-blue-500 opacity-50 mb-5">
                    {/* DATABASE PROFILE PICTURE GOES HERE */}
                    <img href=""></img>
                    <span className="block text-center mb-3 text-2xl">{result.item.name}</span>
                    <span className="block text-center mb-3 text-l">{result.item.role}, {result.item.department}</span>
                    <div className="m-5">{result.item.aboutMe.text}</div>
                </div>
            ))}
        </div>
    </div>
)
}

export default SearchBar