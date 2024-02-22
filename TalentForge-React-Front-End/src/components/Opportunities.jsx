import React, { useState, useEffect } from "react";
import Fuse from "fuse.js"; // Import Fuse.js library
// Import MongoDB related modules if needed

const JobListing = () => {
  // Sample job data
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Software Engineer",
      department: "Engineering",
      location: "Location A",
      salary: "$100,000",
      postedDate: "2024-02-22",
      jobDescription: "We are looking for a software engineer to join our team.",
    },
    {
      id: 2,
      title: "Marketing Manager",
      department: "Marketing",
      location: "Location B",
      salary: "$80,000",
      postedDate: "2024-02-21",
      jobDescription: "We are looking for a marketing manager to join our team.",
    },
    {
      id: 3,
      title: "HR Specialist",
      department: "Human Resources",
      location: "Location C",
      salary: "$70,000",
      postedDate: "2024-02-20",
      jobDescription: "We are looking for an HR specialist to join our team.",
    },
    // Add more sample job data as needed
  ]);

  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([...jobs]); // State for filtered jobs

  // Function to handle department selection
  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Effect to update filtered jobs when searchQuery or selectedDepartment changes
  useEffect(() => {
    let newFilteredJobs = [...jobs];

    if (selectedDepartment !== "All") {
      newFilteredJobs = newFilteredJobs.filter((job) => job.department === selectedDepartment);
    }

    if (searchQuery.trim() !== "") {
      const fuseOptions = {
        keys: ["title", "department"], // Search in 'title' and 'department' fields
        includeScore: true,
      };
      const fuse = new Fuse(newFilteredJobs, fuseOptions);
      const searchResult = fuse.search(searchQuery.trim());
      newFilteredJobs = searchResult.map((result) => result.item);
    }

    setFilteredJobs(newFilteredJobs);
  }, [searchQuery, selectedDepartment, jobs]);

  return (
    <div className="mx-auto max-w-screen-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-3 flex items-center justify-center">
          <h2 className="text-3xl font-semibold mt-8 mb-4">Internal Opportunities</h2>
        </div>
        <div className="md:col-span-1 flex flex-col justify-start items-center md:items-start">
          <div className="w-full">
            <label htmlFor="department" className="block text-gray-700">
              Filter by Department:
            </label>
            <select
              id="department"
              value={selectedDepartment}
              onChange={handleDepartmentChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="All">All Departments</option>
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
              <option value="Human Resources">Human Resources</option>
              {/* Add more departments as needed */}
            </select>
          </div>
          <div className="mt-4 w-full">
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="md:col-span-2 mb-8">
          <div className="grid grid-cols-1 gap-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-4">
                  <h2 className="text-xl text-center font-medium text-gray-900">{job.title}</h2>
                  <p className="text-base text-center">{job.department}</p>
                  <p className="text-base mt-2">Location: {job.location}</p>
                  <p className="text-base -2">Salary: {job.salary}</p>
                  <p className="text-base -2">Posted Date: {job.postedDate}</p>
                  <p className="text-base -2">Job Description: {job.jobDescription}</p>
                  <div className="flex justify-center">
                    <button className="bg-dark-blue hover:bg-washed-blue text-white font-bold py-2 px-4 rounded mt-4">
                      Apply Now
                    </button>
                  </div>
                  {/* Add more job details as needed */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
