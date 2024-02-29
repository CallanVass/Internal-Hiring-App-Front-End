import React, { useState } from "react";

const NewEmployee = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="bg-white mx-6 my-6 md:my-12 lg:my-24 p-6 md:p-10 lg:p-16 xl:mx-96">
        <div className="flex flex-col items-center md:items-start lg:items-center">
          {/* Title */}
          <div className="flex justify-center lg:justify-start pb-4">
            <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold">Create User</h1>
          </div>
          {/* Form: job title/dept/date */}
          <div className="w-full md:w-4/5 lg:w-3/4 xl:w-1/2">
            <form className="space-y-4 text-lg md:text-xl lg:text-lg">
              <div className="flex flex-col md:flex-row md:items-center">
                <label htmlFor="role-input" className="w-full md:w-1/3 text-center md:text-right md:mr-4">
                  First Name:
                </label>
                <input
                  type="text"
                  id="role-input"
                  name="role"
                  className="form-input w-full md:w-2/3 lg:w-3/4 block rounded-md border-2 border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <label htmlFor="dept-input" className="w-full md:w-1/3 text-center md:text-right md:mr-4">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="dept-input"
                  name="dept"
                  className="form-input w-full md:w-2/3 lg:w-3/4 block rounded-md border-2 border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <label htmlFor="email-input" className="w-full md:w-1/3 text-center md:text-right md:mr-4">
                  Email:
                </label>
                <input
                  type="text"
                  id="email-input"
                  name="email"
                  className="form-input w-full md:w-2/3 lg:w-3/4 block rounded-md border-2 border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <label htmlFor="password-input" className="w-full md:w-1/3 text-center md:text-right md:mr-4">
                  Password:
                </label>
                <div className="relative w-full md:w-2/3 lg:w-3/4">
                  <div className="flex items-center justify-between flex-wrap">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password-input"
                      name="password"
                      className="form-input w-full block rounded-md border-2 border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-3"
                    />
                    <label htmlFor="show-password-checkbox" className="cursor-pointer">
                      <input
                        type="checkbox"
                        id="show-password-checkbox"
                        className="form-checkbox h-5 w-5 text-indigo-600"
                        onChange={() => setShowPassword(!showPassword)}
                      />
                      <span className="ml-2 text-sm text-gray-700">Show Password</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <label htmlFor="role-input" className="w-full md:w-1/3 text-center md:text-right md:mr-4">
                  Role:
                </label>
                <input
                  type="text"
                  id="role-input"
                  name="role"
                  className="form-input w-full md:w-2/3 lg:w-3/4 block rounded-md border-2 border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <label htmlFor="department-input" className="w-full md:w-1/3 text-center md:text-right md:mr-4">
                  Department:
                </label>
                <input
                  type="text"
                  id="department-input"
                  name="department"
                  className="form-input w-full md:w-2/3 lg:w-3/4 block rounded-md border-2 border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </form>
          </div>

          {/* On/Off Slider */}
          <div className="inline-flex items-center justify-center my-3">
            <label htmlFor="admin-checkbox" className="mr-4 text-lg md:text-xl lg:text-lg">
              Admin User
            </label>
            <div className="relative inline-block w-28 h-4 content-center rounded-full cursor-pointer">
              <input
                id="admin-checkbox"
                type="checkbox"
                className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-gray-500 checked:bg-green-500  peer-checked:border-gray-900 peer-checked:before:bg-blue-500"
              />
              <label
                htmlFor="admin-checkbox"
                className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-dark-green shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
              ></label>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-6">
            <div className="flex flex-col">
              <button
                type="submit"
                className="bg-dark-green hover:bg-dark-blue text-white font-semibold text-lg md:text-xl lg:text-lg hover:text-white m-2 py-2 md:py-3 lg:py-4 px-5 md:px-6 lg:px-8 min-w-[8rem] border border-blue-500 hover:border-transparent rounded"
              >
                Save
              </button>
              <button
                type="submit"
                className="bg-dark-green hover:bg-dark-blue text-white font-semibold text-lg md:text-xl lg:text-lg hover:text-white m-2 py-2 md:py-3 lg:py-4 px-5 md:px-6 lg:px-8 min-w-[8rem] border border-blue-500 hover:border-transparent rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewEmployee;
