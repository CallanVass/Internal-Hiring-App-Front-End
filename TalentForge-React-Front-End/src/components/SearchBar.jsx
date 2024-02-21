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
    keys: ["department", "name"],
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
      <input
        type="text"
        value={query}
        // On input value change, initate the handleSearch function
        onChange={handleSearch}
        // Placeholder text
        placeholder="Search"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
        <div>
        {results.map((result, index) => (
            // Access the `item` property of the result object
            <div key={index}>{result.item.name} in department: {result.item.department}</div>
        ))}
        </div>
    </div>
  )
}

export default SearchBar