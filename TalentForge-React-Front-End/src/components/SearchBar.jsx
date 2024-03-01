import React, { useState, useEffect } from 'react'
import Fuse from 'fuse.js'

// Recieve users props to SearchBar from UserSearch
const SearchBar = ({ users }) => {

// Set query state to empty string
const [query, setQuery] = useState('')
// Set result state to empty list
const [results, setResults] = useState([])

// Create Fuse object
useEffect(() => {
    const fuse = new Fuse(users, {
        // Item keys to be rendered later
        keys: [
            "department",
            "lastName",
            "firstName",
            "role",
            "aboutMe"
        ],
        includeScore: true,
    });

    // Perform search if query is already present
    if (query.length > 2) {
        const result = fuse.search(query)
        setResults(result)
    }
}, [users, query]) // Depend on users and query so Fuse updates as needed

const handleSearch = (e) => {
    const value = e.target.value
    setQuery(value)
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
                    {/* Linking profile */}
                    <a href="http://localhost:5173/profile-page">
                    <span className="block text-center mb-3 text-2xl">{result.item.firstName + " " + result.item.lastName}</span>
                    <span className="block text-center mb-3 text-l">{result.item.role}, {result.item.department}</span>
                    <div className="m-5">{result.item.aboutMe.text}</div></a>
                </div>
            ))}
        </div>
    </div>
)
}

export default SearchBar