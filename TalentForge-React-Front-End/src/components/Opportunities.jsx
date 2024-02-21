import React, { useState } from 'react';
import Fuse from 'fuse.js'; // Import Fuse.js library

const JobListing = () => {
  // Sample job data
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Software Engineer', department: 'Engineering' },
    { id: 2, title: 'Marketing Manager', department: 'Marketing' },
    { id: 3, title: 'HR Specialist', department: 'Human Resources' },
    // Add more sample job data as needed
  ]);

  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle department selection
  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  // Define Fuse options for searching
  const fuseOptions = {
    keys: ['title', 'department'], // Search in 'title' and 'department' fields
    includeScore: true,
  };

  // Create a new instance of Fuse with the job data and options
  const fuse = new Fuse(jobs, fuseOptions);

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter jobs based on selected department and search query
  let filteredJobs = [...jobs];
  if (selectedDepartment !== 'All') {
    filteredJobs = filteredJobs.filter(job => job.department === selectedDepartment);
  }
  if (searchQuery.trim() !== '') {
    const searchResult = fuse.search(searchQuery.trim());
    filteredJobs = searchResult.map(result => result.item);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mx-auto max-w-screen-lg">
      <div className="md:col-span-1">
        <div className="mr-8">
          <label htmlFor="department" className="block text-gray-700">Filter by Department:</label>
          <select id="department" value={selectedDepartment} onChange={handleDepartmentChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="All">All Departments</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="Human Resources">Human Resources</option>
            {/* Add more departments as needed */}
          </select>
        </div>
        <div className="mt-4 mr-8">
          <input type="text" placeholder="Search jobs..." value={searchQuery} onChange={handleSearchChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
      </div>
      <div className="md:col-span-2">
        <div className="grid grid-cols-1 gap-6">
          {filteredJobs.map(job => (
            <div key={job.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-4">
                <h2 className="text-xl text-center font-medium text-gray-900">{job.title}</h2>
                <p className="text-base text-center text-gray-500">{job.department}</p>
                {/* Add more job details as needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListing;
