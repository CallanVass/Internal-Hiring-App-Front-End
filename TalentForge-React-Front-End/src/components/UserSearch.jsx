import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar'


const UserSearch = () => {
    // Dummy Data
    const company = {
        name: "Microsoft",
        description: "Microsoft is a massive grapefruit that consumers can pick apart piece by piece. This is because grapefruits are so damn delicious, if not a bit tart. Makes a good perfume, though!",
        departments: ["marketing", "engineering", "human resources", "sales", "information technology", "board"]
    }

    const [users, setUsers] = useState([])

    // Function to fetch users from the backend
    const fetchUsers = async () => {
      try {
        try{
            const response = await fetch('http://localhost:8003/users')
            const data = await response.json()
            console.log(data)
            setUsers(data)
        } catch (error) {
            const response = await fetch('http://172.31.190.165:8003/users')
            const data = await response.json()
            console.log(data)
            setUsers(data)
        }
      } catch (error) {
        console.error("Failed to fetch users", error)
      }
    }

    // Use useEffect to fetch users when the component mounts
    useEffect(() => {
      fetchUsers()
    }, [])

return (
  <>
  {/* Div for grid effect */}
  <div className="max-w-7xl mx-auto mt-10 px-5 lg:grid lg:grid-cols-3 lg:gap-4">
      {/* Div for first grid row */}
      <div className="flex flex-col lg:flex-col lg:space-x-4 max-w-6xl mx-auto mt-10 px-5">
          {/* Heading / Company Name */}
          <div className="flex flex-col sm:items-center sm:justify-center items-center max-w-lg mx-auto mt-10 px-5
              md:flex md:items-center md:space-x-4 md:max-w-xl md:mx-auto md:mt-10 md:px-5
              lg:max-w-xl lg:mt-10 lg:px-5 lg:mx-auto ">
              <h2 className="text-6xl font-bold mb-2">{company.name}</h2>
          </div>

          {/* Divider */}
          <hr className="border-b border-gray-900 my-10 w-2/3 mx-auto max-w-md lg:hidden"/>

          <div className="flex flex-col justify-center items-center max-w-lg mx-auto mt-10 px-5 lg:mb-10">
              <p className="text-center">{company.description}</p>
          </div>
      </div>

  {/* Div for second grid row */}
  <div className="flex lg:flex-col lg:space-x-4 max-w-6xl mx-auto mt-10 px-5">
  {/* Department List */}
  <div className="w-1/2 flex flex-col justify-center items-center max-w-xl mx-auto mt-10 px-5 lg:mb-10">
      <h2 className="text-3xl font-bold mb text-center">Available Departments</h2>
      <div className="flex flex-wrap gap-2 items-center justify-center space-x-0.5 max-w-xl mx-auto mt-10 px-5 ">
          {/* Enumerate over each skill, creating a span for each one. */}
          {company.departments.map((department, index) => (
              <span key={index} className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium">
                  {department.charAt(0).toUpperCase() + department.slice(1)}
              </span>
          ))}
              </div>
  </div>
  </div>

  {/* Search Bar */}
  <div className="flex flex-col justify-center items-center max-w-lg mx-auto mt-6 px-5 lg:mb-10">
      <p className="mb-1">Search Users</p>
      <SearchBar users={users}></SearchBar>
  </div>

  {/* End of grid encapuslation div */}
  </div>

</>
)
}

export default UserSearch