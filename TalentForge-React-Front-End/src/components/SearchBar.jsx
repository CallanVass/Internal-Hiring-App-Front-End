import React, { useState } from 'react'
import Fuse from 'fuse.js'

const SearchBar = ({ users }) => {

const [query, setQuery] = useState('')
const [results, setResults] = useState([])

const fuse = new Fuse(users, {
    keys: ["department", "name"],
    includeScore: true,
})

const handleSearch = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      const result = fuse.search(e.target.value)
      setResults(result)
    } else {
      setResults([])
    }
  }

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search"
      />
        <ul>
        {results.map((result, index) => (
            // Access the `item` property of the result object
            <li key={index}>{result.item.name} in department: {result.item.department}</li>
        ))}
        </ul>
    </div>
  )
}

export default SearchBar