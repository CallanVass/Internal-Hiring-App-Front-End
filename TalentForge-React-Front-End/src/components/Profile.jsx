import React, { useState } from 'react'

const Profile = () => {
    // Skills Dummy Data
    // const skills = [
    //     "Speech", "Excel", "Microsoft Office", "Admin", "Coding"
    // ]
    // Profile Dummy Data
    const profileAdam = {
        name: "Adam Hunter",
        role: "Developer",
        department: "Information Technology",
        aboutMe: {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            careerDevelopment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        }
    }
    // Checkboxes Dummy Data
    const statuses = ["Looking for a new job!", "Happy where I am!", "Might be willing to move!", "Unsure how I feel about it!"]

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

    const [skills, setSkills] = useState([
        "Edit Profile to add skills!"
    ])

    const [newSkill, setNewSkill] = useState('')

    const addSkill = () => {
        if (newSkill) {
            setSkills([...skills, newSkill]);
            setNewSkill(''); // Clear input after adding
        }
    }

    const removeSkill = (indexToRemove) => {
        setSkills(skills.filter((_, index) => index !== indexToRemove));
    }
    
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
    <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:max-w-6xl lg:mx-auto lg:mt-10 lg:px-5">

    {/* Profile Image, Role, & Department*/}
    <div className="sm:flex sm:items-center sm:space-x-4 sm:max-w-lg sm:mx-auto sm:mt-10 sm:px-5 sm:bg-red-600
    md:flex md:items-center md:space-x-4 md:max-w-xl md:mx-auto md:mt-10 md:px-5 md:bg-green-500
    lg:flex-col lg:items-center lg:space-y-4 lg:p-5 lg:bg-indigo-700">
    
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
    
    {/* Skills list */}
    {isEditMode ? (
        // If isEditMode is true, then display edit options
        <div className="flex items-center max-w-lg mx-auto mt-10 px-5">
            <div className="flex flex-wrap gap-2 items-center space-x-0.5 mt-10 px-5">
                {skills.map((skill, index) => (
            <div key={index} className="flex items-center">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium">
                {skill}
                </span>
                <button
                    onClick={() => removeSkill(index)}
                    className="bg-red-500 text-white ml-2 px-2 py-1 rounded-md text-sm"
                >
                    Delete
                </button>
            </div>
        ))}
    </div>
    {/* Add new skill */}
    <div className="max-w-lg mx-auto mt-10 px-5">
        <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="border p-2 rounded-md"
            placeholder="New skill"
        />
        <button
            onClick={addSkill}
            className="bg-blue-500 text-white  px-4 py-2 rounded-md mt-2"
        >Add Skill
        </button>
    </div>
          </div>
        ) : (
            // Else if false, simply display skills
            <div className="flex flex-wrap gap-2 items-center space-x-0.5 max-w-lg mx-auto mt-10 px-5">
                {/* Enumerate over each skill, creating a span for each one. */}
                {skills.map((skill, index) => (
                <span key={index} className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium">
                {skill}
                </span>
                ))}
            </div>
        )}

    {/* Profile Description (About Me) */}
    {isEditMode ? (
    <div className="flex flex-col max-w-lg mx-auto mt-10 px-5">
        <label htmlFor="aboutMe" className="text-center mb-3 text-xl">About Me:</label>
        <textarea
        value={editableProfile.aboutMe}
        onChange={(e) => handleInputChange(e, 'aboutMe')}
        className="text-input-class w-full h-32 p-2 border rounded-md" // Tailwind classes to adjust width and height
        />
    </div>
    ) : (
    <div className="flex flex-col justify-center items-center max-w-lg mx-auto mt-10 px-5">
        <h2 className="text-center mb-3 text-xl">About Me</h2>
        <p className="">{editableProfile.aboutMe}</p>
    </div>
    )}

    {/* Divider */}
    <hr className="border-b border-gray-900 my-10 w-2/3 mx-auto max-w-md lg:hidden"/>

    {/* Checkboxes (Radio Buttons) */}
    {isEditMode ? (
    <div className="flex flex-col justify-center items-center max-w-lg mx-auto mt-10 px-5">
        {statuses.map((status, index) => (
        <label key={index} className="flex items-center space-x-2">
            <input
            type="radio"
            name="status"
            id={`status-${index}`}
            value={status}
            checked={editableProfile.status === status}
            onChange={(e) => handleInputChange(e, 'status')}
            className="form-radio h-5 w-5 text-blue-600"
            />
            <span>{status}</span>
        </label>
        ))}
    </div>
    ) : (
        <div className="flex flex-col justify-center items-center max-w-lg mx-auto mt-10 px-5">
        <h2 className="text-center mb-3 text-xl">Status:</h2>
        <p>{editableProfile.status}</p>
        </div>
    )}

    {/* Career Development Description */}
    {isEditMode ? (
    <div className="flex flex-col max-w-lg mx-auto mt-10 px-5">
        <label htmlFor="aboutMe" className="text-center mb-3 text-xl">Career Development:</label>
        <textarea
        value={editableProfile.aboutMe}
        onChange={(e) => handleInputChange(e, 'aboutMe')}
        className="text-input-class w-full h-32 p-2 border rounded-md" // Tailwind classes to adjust width and height
        />
    </div>
    ) : (
    <div className="flex flex-col justify-center items-center max-w-lg mx-auto mt-10 px-5">
        <h2 className="text-center mb-3 text-xl">Career Development</h2>
        <p>{editableProfile.aboutMe}</p>
    </div>
    )}

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
    <div className="flex flex-col justify-center items-center max-w-lg mx-auto mt-10 mb-10 px-5">
        <button onClick={toggleEditMode} className="bg-blue-800 text-white p-4 rounded-lg shadow-md">
            {isEditMode ? 'Save Changes' : 'Edit Profile'}
        </button>
    </div>
    </div>
    
  )
}

export default Profile