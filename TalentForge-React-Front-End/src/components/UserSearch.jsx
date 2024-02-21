import React, {useState} from 'react'

const UserSearch = () => {
    // Dummy Data
    const company = {
        name: "Microsoft",
        description: "Microsoft is a massive grapefruit that consumers can pick apart piece by piece. This is because grapefruits are so damn delicious, if not a bit tart. Makes a good perfume, though!",
        departments: ["marketing", "engineering", "hr", "sales"]
    }


    const [selectedDepartment, setSelectedDepartment] = useState('')

    const handleChange = (event) => {
        setSelectedDepartment(event.target.value);
      }

  return (
    <>
    {/* Heading / Company Name */}
    <div className="flex flex-col sm:items-center sm:justify-center items-center max-w-lg mx-auto mt-10 px-5
        md:flex md:items-center md:space-x-4 md:max-w-xl md:mx-auto md:mt-10 md:px-5 
        lg:max-w-xl lg:mt-10 lg:px-5 lg:mx-auto ">
        <h2 className="text-xl font-bold mb-2">{company.name}</h2>
    </div>

    {/* Divider */}
    <hr className="border-b border-gray-900 my-10 w-2/3 mx-auto max-w-md lg:hidden"/>
    
    <div className="flex flex-col justify-center items-center max-w-lg mx-auto mt-10 px-5 lg:mb-10">
        <p className="text-center">{company.description}</p>
    </div>

    {/* Department Dropdown */}
    <div className="w-64 flex flex-col justify-center items-center max-w-lg mx-auto mt-10 px-5 lg:mb-10">
        <label htmlFor="department-dropdown" className="block mb-2 text-sm font-medium text-gray-900">Select a Department</label>
        <select
            id="department-dropdown"
            value={selectedDepartment}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
            {/* Default option */}
            <option value="">Select...</option>

            {/* Dynamically generated options from the departments array in company object */}
            {company.departments.map((department, index) => (
            <option key={index} value={department}>
                {department.charAt(0).toUpperCase() + department.slice(1)}
            </option>
            ))}
        </select>
    </div>

    

  </>
  )
}

export default UserSearch