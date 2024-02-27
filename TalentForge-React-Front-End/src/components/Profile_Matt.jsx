import React, { useState, useContext } from "react";

const Profile_Matt = () => {
  const users = [
    {
      _id: "65dd2ca89d0a768b6605a4b3",
      firstName: "Adam",
      lastName: "Andrews",
      email: "adam@email.com",
      password: "$2b$08$SHqnZN3OS2/FKd8NYtP6S.TdBJwIVyDZfMfWfxeYHngK0m/Z8zziC",
      role: "Recruitment Manager",
      department: "Human Resources",
      image: "./misc/male_user_image.jpeg",
      admin: true,
      applications: [],
      __v: 0,
    },
    {
      _id: "65dd2ca89d0a768b6605a4b4",
      firstName: "Betty",
      lastName: "Bailey",
      email: "betty@email.com",
      password: "$2b$08$YLAX7rqWk5IgW2fQFkL7vuGJDumTDMuSNRuFaG2gGWEfC2XfGpN0S",
      role: "HR Specialist",
      department: "Human Resources",
      image: "./misc/female_user_image.jpeg",
      admin: false,
      applications: [],
      __v: 0,
    },
    {
      _id: "65dd2ca89d0a768b6605a4b5",
      firstName: "Charlie",
      lastName: "Castleton",
      email: "charlie@email.com",
      password: "$2b$08$W1jXuLHJkS01R1xKhwXneOZsNR7Wq3ufs05CogClBC4VP.44xlI5u",
      role: "Software Engineer",
      department: "IT",
      image: "./misc/male_user_image.jpeg",
      admin: false,
      applications: [],
      __v: 0,
    },
    {
      _id: "65dd2ca89d0a768b6605a4b6",
      firstName: "David",
      lastName: "Denley",
      email: "david@email.com",
      password: "$2b$08$4iQHdxf3TWrjZZdsDR1ubudqUVqaSwzY6FhSaS5w/jw1Mbqc0xgPe",
      role: "Product Manager",
      department: "Production",
      image: "./misc/male_user_image.jpeg",
      admin: false,
      applications: [],
      __v: 0,
    },
    {
      _id: "65dd2ca89d0a768b6605a4b7",
      firstName: "Adam",
      lastName: "Hunter",
      email: "adamh@email.com",
      password: "$2b$08$.BkQP9c3KXQ4oJCPHfYFw.NDwDvRREQxRHPKheE5y4Id5IhE.aRTS",
      role: "Developer",
      department: "IT",
      image: "./misc/male_user_image.jpeg",
      admin: false,
      aboutMe: {
        text: "I am a developer",
        careerDevelopment: "I want to be a senior developer",
        tags: [
          "Looking for a new job!",
          "Happy where I am!",
          "Might be willing to move!",
          "Unsure how I feel about it!",
        ],
      },
      applications: [],
      __v: 0,
    },
  ];

  // Checkboxes Dummy Data
  const statuses = [
    "Looking for a new job!",
    "Happy where I am!",
    "Might be willing to move!",
    "Unsure how I feel about it!",
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
      jobDescription: "Secretary position. Not for the feint of heart.",
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

  const [isEditMode, setIsEditMode] = useState(false);

  const [profileImage, setProfileImage] = useState("path-to-your-image.jpg");

  const [skills, setSkills] = useState(["Edit Profile to add skills!"]);

  const [newSkill, setNewSkill] = useState("");

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
    firstName: users[4].firstName,
    lastName: users[4].lastName,
    role: users[4].role,
    department: users[4].department,
    // aboutMe: users[4].aboutMe.text,
    // careerDevelopment: users[4].aboutMe.careerDevelopment,
  });

  const toggleEditMode = () => setIsEditMode(!isEditMode);

  const handleInputChange = (e, field) => {
    setEditableProfile({ ...editableProfile, [field]: e.target.value });
  };

  return (
    <>
      {/* Div encapsulating/creating grid effect */}
      <div className="max-w-7xl mx-auto mt-10 px-5 lg:grid lg:grid-cols-3 lg:gap-4">
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
            <div className="flex-1 ">
              {/* Edit Name */}
              {isEditMode ? (
                <div className="flex items-center mb-4 w-full">
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
                <h2 className="text-3xl font-bold mb-2">{`${editableProfile.firstName} ${" "} ${
                  editableProfile.lastName
                }`}</h2>
              )}

              {/* Edit Role */}
              {isEditMode ? (
                <div className="flex items-center mb-4 w-full">
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
                <p>Role: {editableProfile.role}</p>
              )}

              {/* Edit Department */}
              {isEditMode ? (
                <div className="flex items-center mb-4 w-full">
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
                <p>Department: {editableProfile.department}</p>
              )}
            </div>
          </div>

          {/* Skills list */}
          {isEditMode ? (
            // If isEditMode is true, then display edit options
            <div className="flex justify-center items-center flex-col">
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
              {/* Add new skill div */}
              <div className="flex justify-center items-center my-3 flex-col">
                {" "}
                {/* Increased max-w-lg to max-w-xl */}
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
                  className="bg-dark-green text-white shadow shadow-gray-300 px-4 py-2 rounded-md mt-2 self-center hover:bg-dark-blue"
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
                <span key={index} className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          )}

          {/* Profile Description (About Me) */}
          {isEditMode ? (
            <div className="flex flex-col items max-w-lg mx-auto mt-10 px-5 lg:mb-10">
              <label htmlFor="aboutMe" className="text-center mb-3 text-xl">
                About Me:
              </label>
              <textarea
                maxLength="220"
                placeholder="(220 character max)"
                value={editableProfile.aboutMe}
                onChange={(e) => handleInputChange(e, "aboutMe")}
                className="text-input-class w-full h-32 p-2 border rounded-md"
              />
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center max-w-lg mx-auto mt-10 px-5 lg:mb-10">
              <h2 className="text-center mb-3 text-xl">About Me</h2>
              <p className="">{editableProfile.aboutMe}</p>
            </div>
          )}
          {/* END OF FIRST COLUMN DIV */}
        </div>

        {/* Divider */}
        <hr className="border-b border-gray-900 my-10 w-2/3 mx-auto max-w-md lg:hidden" />

        {/* Div for second grid row */}
        <div className="flex lg:flex-col lg:space-x-4 max-w-6xl mx-auto mt-10 px-5">
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
                    onChange={(e) => handleInputChange(e, "status")}
                    className="form-radio h-5 w-5 text-black"
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
              <label htmlFor="aboutMe" className="text-center mb-3 text-xl font-bold">
                Career Development:
              </label>
              <textarea
                maxLength="220"
                placeholder="(220 character max)"
                value={editableProfile.careerDevelopment}
                onChange={(e) => handleInputChange(e, "careerDevelopment")}
                className="text-input-class w-full h-32 p-2 border rounded-md" // Tailwind classes to adjust width and height
              />
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center max-w-lg mx-auto mt-10 px-5">
              <h2 className="text-center mb-3 text-xl">Career Development</h2>
              <p>{editableProfile.careerDevelopment}</p>
            </div>
          )}
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
          <div className="flex flex-col justify-center items-center max-w-lg mx-auto mt-10 mb-10 px-5">
            <button
              onClick={toggleEditMode}
              className="bg-washed-blue text-white p-4 rounded-lg shadow-md hover:bg-dark-blue"
            >
              {isEditMode ? "Save Changes" : "Edit Profile"}
            </button>
          </div>
          {/* END OF THIRD COLUMN DIV */}
        </div>
        {/* End of div encapsulating/creating grid effect */}
      </div>
    </>
  );
};

export default Profile_Matt;
