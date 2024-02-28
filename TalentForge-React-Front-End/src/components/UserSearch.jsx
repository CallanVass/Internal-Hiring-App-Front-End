import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

const UserSearch = () => {
  // Dummy Data
  const company = {
    name: "Microsoft",
    description:
      "Microsoft is a massive grapefruit that consumers can pick apart piece by piece. This is because grapefruits are so damn delicious, if not a bit tart. Makes a good perfume, though!",
    departments: ["marketing", "engineering", "human resources", "sales", "information technology", "board"],
  };

  const [users, setUsers] = useState([]);

  // Function to fetch users from the backend
  const fetchUsers = async () => {
    try {
      try {
        const response = await fetch("/users");
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        const response = await fetch("http://172.31.190.165:8003/users");
        const data = await response.json();
        console.log(data);
        setUsers(data);
      }
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  // Use useEffect to fetch users when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="bg-white max-w-7xl mx-auto my-10 px-5 lg:grid lg:grid-cols-3 lg:gap-4">
        {/* Company Details */}
        <div className="flex flex-col lg:flex-col lg:space-x-4 max-w-6xl mx-auto mt-10 px-5 lg:mt-0">
          <div className="flex flex-col justify-center items-center max-w-lg mx-auto mt-10 px-5">
            <h2 className="text-4xl lg:text-6xl font-bold mb-2 text-center">{company.name}</h2>
            <hr className="border-b border-gray-900 my-6 w-2/3 mx-auto max-w-md lg:hidden" />
            <p className="text-center text-2xl">{company.description}</p>
          </div>
        </div>

        {/* Available Departments */}
        <div className="flex flex-col lg:flex-col lg:space-x-4 max-w-6xl mx-auto mt-10 px-5">
          <div className="w-full lg:w-auto flex flex-col items-center max-w-xl mx-auto mt-10 px-5">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center">Available Departments</h2>
            <div className="flex flex-col gap-2 justify-center max-w-xl mx-auto">
              {company.departments.map((department, index) => (
                <span
                  key={index}
                  className="bg-dark-blue text-white px-4 py-2 rounded-md text-lg font-medium flex items-center justify-center"
                >
                  {department.charAt(0).toUpperCase() + department.slice(1)}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col lg:col-span-3">
          <div className="flex justify-center items-center max-w-lg mx-auto mt-6 px-5">
            <p className="mb-1 text-center">Search Users</p>
          </div>
          <div className="flex justify-center items-center max-w-lg mx-auto px-5">
            <SearchBar users={users} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSearch;
