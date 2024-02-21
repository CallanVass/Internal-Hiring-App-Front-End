import React, { useState } from 'react';

const JobListing = () => {
  // Sample job data
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Software Engineer', department: 'Engineering' },
    { id: 2, title: 'Marketing Manager', department: 'Marketing' },
    { id: 3, title: 'HR Specialist', department: 'Human Resources' },
    // Add more sample job data as needed
  ]);

  const [selectedDepartment, setSelectedDepartment] = useState('All');

  // Function to handle department selection
  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  // Filter jobs based on selected department
  const filteredJobs = selectedDepartment === 'All' ? jobs : jobs.filter(job => job.department === selectedDepartment);

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
      </div>
      <div className="md:col-span-2">
        <div className="grid grid-cols-1 gap-6">
          {filteredJobs.map(job => (
            <div key={job.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-4">
                <h2 className="text-xl font-medium text-gray-900">{job.title}</h2>
                <p className="text-gray-500">{job.department}</p>
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
