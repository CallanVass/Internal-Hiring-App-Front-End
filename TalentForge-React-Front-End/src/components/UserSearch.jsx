import React, {useState} from 'react'
import SearchBar from './SearchBar'


const UserSearch = () => {
    // Dummy Data
    const company = {
        name: "Microsoft",
        description: "Microsoft is a massive grapefruit that consumers can pick apart piece by piece. This is because grapefruits are so damn delicious, if not a bit tart. Makes a good perfume, though!",
        departments: ["marketing", "engineering", "human resources", "sales", "information technology", "board"]
    }

      const users = [
        {
            name: "Adam Hunter",
            role: "Developer",
            department: "Information Technology",
            aboutMe: {
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                careerDevelopment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
            }
        },
        {
            name: "Zach Dempsey",
            role: "Intern (Coffee Pro)",
            department: "Marketing",
            aboutMe: {
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                careerDevelopment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
            }
        },
        {
            name: "Sarah Conner",
            role: "Manager",
            department: "Human Resources",
            aboutMe: {
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                careerDevelopment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
            }
        },
        {
            name: "Sigma Ligma",
            role: "Senior Developer",
            department: "Information Technology",
            aboutMe: {
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                careerDevelopment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
            }
        },
        {
            name: "James Turner",
            role: "CEO",
            department: "Board",
            aboutMe: {
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                careerDevelopment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
            }
        },
      ]

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