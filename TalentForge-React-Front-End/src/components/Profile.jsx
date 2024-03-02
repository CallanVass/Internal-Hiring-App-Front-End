/* eslint-disable react/prop-types */
import React, { useState, useContext } from "react"
import  Auth  from "../authentication/Auth"
import { AppContext, AppContextProvider } from '../authentication/AppContext'


// KD: Status is called tags in DB - but I was unclear if this was going to be hardcoded checkboxes??


const Profile = () => {
  const {allUsers, allListings, loggedInUser, listing, profile} = useContext(AppContext)
  const [users, setUsers] = allUsers
  const [currentUser, setCurrentUser] = loggedInUser
  const [profileUser, setProfileUser] = profile
  const [listings, setListings] = allListings


 
  document.title = "Profile"
  const [isEditMode, setIsEditMode] = useState(false)
  const [profileImage, setProfileImage] = useState("path-to-your-image.jpg")
  const [skills, setSkills] = useState(["Edit Profile to add skills!"])
  const [newSkill, setNewSkill] = useState("")




  console.log(currentUser)
  console.log(profileUser)

  // Checkboxes Dummy Data
  const statuses = [
    "Looking for a new job",
    "Happy where I am",
    "Might be willing to move",
    "Unsure how I feel about it",
  ];

  // Applications Dummy Data

  const applications = {
    app1: {
      jobName: "Assistant Manager",
      jobSalary: "65,000",
      jobDescription: "An assistant manager position.",
    },
    app2: {
      jobName: "Secretary",
      jobSalary: "60,000",
      jobDescription: "Secretary position. Not for the faint of heart.",
    },
    app3: {
      jobName: "CEO",
      jobSalary: "100,000,000",
      jobDescription: "Wow, aren't you important, huh?",
    },
    app4: {
      jobName: "Minimum Wage Worker",
      jobSalary: "52,000",
      jobDescription: "Sorry about that one.",
    },
  };

  // The user profile is required to conditionally render the edit button and job applications
  // We know the userId and that there is a valid token
  // If the ID of the user and the ID from the token match or it is an admin, then the edit button/applications are rendered
  // Profile will call a method passing the userId of the profile and the userId from the token

  function EditButtonRender({Auth}) {
  return (
    <div className="editButtonRender">
      { Auth ?
      (
        <div className="flex flex-col justify-center items-center max-w-lg mx-auto mt-10 mb-10 px-5">
          <button
            onClick={toggleEditMode}
            className="bg-washed-blue text-white p-4 rounded-lg shadow-md hover:bg-dark-blue"
          >
            {isEditMode ? "Save Changes" : "Edit Profile"}
          </button>
        </div>
      )
      : null
      }
    </div>
  )}

  const addSkill = () => {
    if (newSkill) {
      setSkills([...skills, newSkill]);
      setNewSkill(""); // Clear input after adding
    }
  };

  const removeSkill = (indexToRemove) => {
    setSkills(skills.filter((_, index) => index !== indexToRemove));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a URL for the new image file
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const [editableProfile, setEditableProfile] = useState({
    firstName: profileUser.firstName,
    lastName: profileUser.lastName,
    role: profileUser.role,
    department: profileUser.department,
    aboutMe: profileUser.aboutMe.text,
    careerDevelopment: profileUser.aboutMe.careerDevelopment,

  });

  const toggleEditMode = () => setIsEditMode(!isEditMode);

  const handleInputChange = (e, field) => {
    setEditableProfile({ ...editableProfile, [field]: e.target.value });
  };

  return (
    <>
      {/* Div encapsulating/creating grid effect */}
      <div className="bg-white items-center justify-center mx-6 my-6 md:my-12 lg:my-24 p-6 md:p-10 lg:p-16 xl:mx-40 mt-10 px-5 lg:grid lg:grid-cols-3 lg:gap-4">
        {/* Div for first grid row */}
        <div className="flex justify-center items-center flex-col lg:flex-col lg:space-x-4 max-w-6xl mx-auto mt-10 px-5">
          {/* First Column: Profile Image, Role, & Department */}
          <div
            className="flex flex-col sm:items-center sm:justify-center items-center max-w-lg mx-auto mt-10 px-5
        md:flex md:items-center md:space-x-4 md:max-w-xl md:mx-auto md:mt-10 md:px-5
        lg:max-w-xl lg:mx-0 lg:mt-10 lg:px-5 "
          >
            {/* Edit Profile Picture */}
            {isEditMode ? (
              <div>
                {" "}
                <label htmlFor="image-upload" className="cursor-pointer">
                  <img src={profileImage} alt="Click to upload image" className="mb-3" />
                </label>
                <input id="image-upload" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
              </div>
            ) : (
              <div className="flex justify-center">
                <img src={profileImage} alt="Profile Picture" className="text-center mb-4 sm:w-48 md:w-64 lg:w-96" />
              </div>
            )}
            <div className="flex flex-col items-center justify-center flex-1">
              {/* Edit Name */}
              {isEditMode ? (
                <div className="flex justify-center items-center mb-4 w-full">
                  <div className="mr-2">Name:</div>
                  <input
                    maxLength="30"
                    placeholder="(30 characters max)"
                    type="text"
                    value={`${editableProfile.firstName} ${" "} ${editableProfile.lastName}`}
                    onChange={(e) => handleInputChange(e, "name")}
                    className="text-input-class border border-gray-300 w-full"
                  />
                </div>
              ) : (
                <h2 className="text-2xl text-center font-bold mb-2">{`${editableProfile.firstName} ${" "} ${
                  editableProfile.lastName
                }`}</h2>
              )}

              {/* Edit Role */}
              {isEditMode ? (
                <div className="flex items-center mb-4">
                  <div className="mr-2">Role:</div>
                  <input
                    type="text"
                    maxLength="20"
                    placeholder="(20 character max)"
                    value={editableProfile.role}
                    onChange={(e) => handleInputChange(e, "role")}
                    className="text-input-class flex-1 border border-gray-300"
                  />
                </div>
              ) : (
                <p className="text-xl">Role: {editableProfile.role}</p>
              )}

              {/* Edit Department */}
              {isEditMode ? (
                 <div className="flex items-center  w-full">
                  <div className="mr-2">Department: </div>
                  <input
                    type="text"
                    maxLength="25"
                    placeholder="(25 character max)"
                    value={editableProfile.department}
                    onChange={(e) => handleInputChange(e, "department")}
                    className="text-input-class border border-gray-300"
                  />
                </div>
              ) : (
                <p className="text-xl">Department: {editableProfile.department}</p>
              )}
            </div>
          </div>

          {/* Skills list */}
          {isEditMode ? (
            // If isEditMode is true, then display edit options
            <div className="flex justify-center items-center max-w-lg mx-auto px-5 flex-col">
              {" "}
              {/* Changed class to flex-col */}
              <div className="flex flex-wrap gap-2 items-center space-x-0.5 mt-10 px-5 flex-col">
                {" "}
                {/* Changed class to flex-col */}
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center flex-col">
                    {" "}
                    {/* Changed class to flex-col */}
                    <span className="bg-dark-green text-white px-4 py-2 rounded-md mb-2 font-medium">{skill}</span>
                    <button
                      onClick={() => removeSkill(index)}
                      className="bg-red-500 text-white ml-2 px-2 py-1 rounded-md mb-2"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
              {/* Add new skill */}
              <div className="flex justify-center items-center max-w-lg mx-auto mt-10 px-5 flex-col"> {/* Added flex class */}
                <input
                  maxLength="15"
                  placeholder="(15 character max)"
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  className="border p-2 rounded-md w-full"
                />
                <button
                  onClick={addSkill}
                  data-testid="add-skill-button"
                  className="bg-dark-green text-white shadow shadow-gray-300 px-4 py-2 rounded-md mt-2 self-center"

                >
                  Add Skill
                </button>
              </div>
            </div>
          ) : (
            // Else if false, simply display skills
            <div className="flex flex-wrap gap-2 items-center space-x-0.5 max-w-lg mx-auto mt-10 px-5">
              {/* Enumerate over each skill, creating a span for each one. */}
              {skills.map((skill, index) => (
                <span key={index} className="bg-dark-blue text-white px-4 py-2 rounded-md text-md font-medium">
                  {skill}
                </span>
              ))}
            </div>
          )}

          {/* Profile Description (About Me) */}
          {isEditMode ? (
            <div className="flex flex-col items-center justify-center w-full mx-auto mt-10 px-5 lg:mb-10">
            <label htmlFor="aboutMe" className="text-center mb-3 text-bold text-xl">
                About Me:
              </label>
              <textarea
                maxLength="220"
                placeholder="(220 character max)"
                value={editableProfile.aboutMe}
                onChange={(e) => handleInputChange(e, "aboutMe")}
                className="text-input-class w-full h-56 p-2 block rounded-md border-2 border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center max-w-lg mx-auto mt-10 px-5 lg:mb-10">
              <h2 className="text-2xl text-center font-bold mb-2">About Me</h2>
              <p className="text-xl">{editableProfile.aboutMe}</p>
            </div>
          )}
          {/* END OF FIRST COLUMN DIV */}
        </div>

        {/* Divider */}
        <hr className="border-b border-gray-900 my-10 w-2/3 mx-auto max-w-md lg:hidden" />

        {/* Div for second grid row */}
        <div className="flex flex-col justify-center items-center lg:flex-col lg:space-x-4 max-w-6xl mx-auto mt-10 mb-10 px-5 ">
          {/* Checkboxes (Radio Buttons) */}
          <div
            className={`flex ${isEditMode ? "flex-col" : ""} ${isEditMode ? "w-full" : "max-w-lg"} mx-auto mt-10 ${
              isEditMode ? "" : "px-5"
            }`}
          >
            {isEditMode ? (
              <div className="flex flex-col justify-center items-center w-full mx-auto mt-10 ">
                {statuses.map((status, index) => (
                  <label key={index} className="flex text-xl text-left items-center mb-8 space-x-2">
                    <input
                      type="radio"
                      name="status"
                      id={`status-${index}`}
                      value={status}
                      checked={editableProfile.status === status}
                      onChange={(e) => handleInputChange(e, "status")}
                      className="form-radio h-5 w-5 text-black"
                    />
                    <span>{status}</span>
                  </label>
                ))}
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center mb-12">
                <h2 className="text-2xl text-center font-bold mb-2">Status:</h2>
                <p className="text-xl">{editableProfile.status}</p>
              </div>
            )}
          </div>

          {/* Career Development Description */}
          <div
            className={`flex ${isEditMode ? "flex-col" : ""} ${isEditMode ? "w-full" : "max-w-lg"} mx-auto mt-10 ${
              isEditMode ? "px-5" : ""
            } justify-center items-center`}
          >
            {isEditMode ? (
              <div className="w-full mx-auto mt-10 px-5 flex flex-col items-center">
                {" "}
                {/* Added items-center class */}
                <label htmlFor="aboutMe" className="text-center mb-3 text-xl font-bold">
                  Career Development:
                </label>
                <textarea
                  maxLength="220"
                  placeholder="(220 character max)"
                  value={editableProfile.careerDevelopment}
                  onChange={(e) => handleInputChange(e, "careerDevelopment")}
                  className="text-input-class w-full h-56 p-2 block rounded-md border-2 border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" // Tailwind classes to adjust width and height
                />
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl text-center font-bold mb-2">Career Development</h2>
                <p className="text-xl text-center">{editableProfile.careerDevelopment}</p>
              </div>
            )}
          </div>
          {/* END OF SECOND COLUMN DIV */}
        </div>
        {/* Div for third grid row */}
        <div className="flex flex-col lg:flex-col lg:space-x-4 max-w-6xl mx-auto mt-10 mb-10 px-5 ">
          {/* List of Applications Can applications be rendered using opportunities.jsx ? */}
          <div className="space-y-4 justify-center items-center max-w-lg mx-auto mt-10 px-5 ">
            {Object.entries(applications).map(([key, value]) => (
              <div key={key} className="bg-washed-blue text-white p-4 rounded-lg shadow-md border border-gray-300">
                <a className="text-lg font-semibold" href="">
                  {value.jobName}
                </a>
                <p className="text-sm">Salary: ${value.jobSalary}</p>
                <p className="text-sm">{value.jobDescription}</p>
              </div>
            ))}
          </div>

          {/* Edit Button */}
          <EditButtonRender Auth={Auth(profileUser._id, currentUser)}/>
          {/* END OF THIRD COLUMN DIV */}
        </div>
        {/* End of div encapsulating/creating grid effect */}
      </div>
    </>
  )
}

export default Profile;
