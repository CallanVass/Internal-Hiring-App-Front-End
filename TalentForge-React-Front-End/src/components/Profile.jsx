import React from 'react'

const Profile = () => {
    // Dummy Data
    const skills = [
        "Speech", "Excel", "Microsoft Office", "Admin", "Coding"
    ]
    // Dummy Data
    const profileAdam = {
        name: "Adam",
        role: "Developer",
        department: "Information Technology",
        aboutMe: {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }
    }
    // Dummy Data
    const statuses = ["Looking for a new job!", "Happy where I am!", "Could be willing to move!", "Not sure!"]

    
  return (
    <>

    {/* Profile Image, Role, & Department*/}
    <div className="flex items-center space-x-4 max-w-lg mx-auto mt-10 px-5" >
      <img src="path-to-your-image.jpg" alt="Descriptive Text" className="w-1/3" />
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2">{profileAdam.name}</h2>
        <p className="">Role: {profileAdam.role}</p>
        <p>Department: {profileAdam.department}</p>
      </div>
    </div>

    {/* Skills Block */}
    <div className="flex flex-wrap gap-2 items-center space-x-0.5 max-w-lg mx-auto mt-10 px-5">
        {/* Enumerate over each skill, creating a span for each one. */}
      {skills.map((skill, index) => (
        <span key={index} className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium">
          {skill}
        </span>
      ))}
    </div>

    {/* Profile Description */}
    <div className="flex flex-col justify-center items-center max-w-lg mx-auto mt-10 px-5">
        <h2 className="text-center mb-3 text-xl">About Me</h2>
        <p className="">{profileAdam.aboutMe.text}</p>
    </div>

    {/* Divider */}
    <hr className="border-b border-gray-900 my-10 w-2/3 mx-auto max-w-md"/>

    {/* Checkboxes */}
    <div className="flex flex-col space-y-2 items-center">
      {statuses.map((status, index) => (
        <label key={index} className="flex items-center space-x-2">
          <input type="checkbox" id={`status-${index}`} className="form-checkbox h-5 w-5 text-blue-600" />
          <span>{status}</span>
        </label>
      ))}
    </div>
    </>
    
  )
}

export default Profile