import React, { useState } from 'react'

const Profile = () => {
    // Skills Dummy Data
    const skills = [
        "Speech", "Excel", "Microsoft Office", "Admin", "Coding"
    ]
    // Profile Dummy Data
    const profileAdam = {
        name: "Adam",
        role: "Developer",
        department: "Information Technology",
        aboutMe: {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            careerDevelopment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        }
    }
    // Checkboxes Dummy Data
    const statuses = ["Looking for a new job!", "Happy where I am!", "Might be willing to move!", "Not sure!"]

    // Applications Dummy Data

    const applications = {
        app1: {
            jobName: "Assistant Manager",
            jobSalary: "65,000",
            jobDescription: "An assistant manager position."
    },
        app2: {
            jobName: "Secretary",
            jobSalary: "60,000",
            jobDescription: "Secretary position. Not for the feint of heart."
        },
        app3: {
            jobName: "CEO",
            jobSalary: "100,000,000",
            jobDescription: "Wow, aren't you important, huh?"
        },
        app4: {
            jobName: "Minimum Wage Worker",
            jobSalary: "52,000",
            jobDescription: "Sorry about that one."
        },
    }

    const [isEditMode, setIsEditMode] = useState(false)

    const [profileImage, setProfileImage] = useState('path-to-your-image.jpg')

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Create a URL for the new image file
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    }

    const [editableProfile, setEditableProfile] = useState({
        name: profileAdam.name,
        role: profileAdam.role,
        department: profileAdam.department,
        aboutMe: profileAdam.aboutMe.text,
        careerDevelopment: profileAdam.aboutMe.careerDevelopment,
    })

    const toggleEditMode = () => setIsEditMode(!isEditMode)

    const handleInputChange = (e, field) => {
        setEditableProfile({...editableProfile, [field]: e.target.value})
    };
    
    
  return (
    <>

    {/* Profile Image, Role, & Department*/}
    <div className="flex items-center space-x-4 max-w-lg mx-auto mt-10 px-5">
    
    {/* Edit Profile Picture */}
    {isEditMode ? (
            <div> <p className="text-xs">Click To Select Image</p>
                <label htmlFor="image-upload" className="cursor-pointer">
                    <img src={profileImage} alt="Profile" className="w-3/3" />
                </label>
                <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                />
        </div>
        ) : (
            <img src={profileImage} alt="Profile" className="w-1/3" />
        )}
        <div className="flex-1">

      {/* Edit Name */}
        {isEditMode ? (
            <div className="flex items-center">
            <div className="mr-2">Name:</div>
                <input
                    type="text"
                    value={editableProfile.name}
                    onChange={(e) => handleInputChange(e, 'name')}
                    className="text-input-class"
                />
          </div>
        ) : (
          <h2 className="text-xl font-bold mb-2">{editableProfile.name}</h2>
        )}

        {/* Edit Role */}
        {isEditMode ? (
            <div className="flex items-center">
            <div className="mr-2">Role:</div>
            <input
                type="text"
                value={editableProfile.role}
                onChange={(e) => handleInputChange(e, 'role')}
                className="text-input-class flex-1"
            />
            </div>
        ) : (
          <p>Role: {editableProfile.role}</p>
        )}

        {/* Edit Department */}
        {isEditMode ? (
            <div className="flex items-center">
            <div className="mr-2">Department: </div>
          <input
            type="text"
            value={editableProfile.department}
            onChange={(e) => handleInputChange(e, 'department')}
            className="text-input-class"
          />
          </div>
        ) : (
          <p>Department: {editableProfile.department}</p>
        )}
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

    {/* Career Development Description */}
    <div className="flex flex-col justify-center items-center max-w-lg mx-auto mt-10 px-5">
        <h2 className="text-center mb-3 text-xl">Career Development</h2>
        <p className="">{profileAdam.aboutMe.careerDevelopment}</p>
    </div>

    {/* List of Applications */}
    <div className="space-y-4 justify-center items-center max-w-lg mx-auto mt-10 px-5">
      {Object.entries(applications).map(([key, value]) => (
        <div key={key} className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <a className="text-lg font-semibold" href="">{value.jobName}</a>
          <p className="text-sm">Salary: ${value.jobSalary}</p>
          <p className="text-sm">{value.jobDescription}</p>
        </div>
      ))}
    </div>

    {/* Edit Button */}
    <div className="flex flex-col justify-center items-center max-w-lg mx-auto mt-10 px-5">
        <button onClick={toggleEditMode} className="bg-blue-800 text-white p-4 rounded-lg shadow-md">
            {isEditMode ? 'Save Changes' : 'Edit Profile'}
        </button>
    </div>
    </>
    
  )
}

export default Profile