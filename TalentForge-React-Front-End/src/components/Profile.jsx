import React from 'react'

const Profile = () => {
    const skills = [
        "Speech", "Excel", "Microsoft Office", "Admin", "Coding"
    ]
  return (
    <>

    {/* Profile Image, Role, & Department*/}
    <div className="flex items-center space-x-4 max-w-lg mx-auto mt-10 px-5" >
      <img src="path-to-your-image.jpg" alt="Descriptive Text" className="w-1/3" />
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2">Name</h2>
        <p className="">Role: </p>
        <p>Department: </p>
      </div>
    </div>

    {/* Skills Block */}
    <div className="flex flex-wrap gap-2 items-center space-x-0.5 max-w-lg sm:mx-auto mt-10 px-5">
        {/* Enumerate over each skill, creating a span for each one */}
      {skills.map((skill, index) => (
        <span key={index} className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium">
          {skill}
        </span>
      ))}
    </div>

    {/* Profile Description */}
    <div className="flex flex-wrap gap-2 items-center space-x-0.5 max-w-lg sm:mx-auto mt-10 px-5">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    </div>
    </>
  )
}

export default Profile