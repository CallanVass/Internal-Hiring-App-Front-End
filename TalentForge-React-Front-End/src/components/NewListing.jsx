import React from "react";

const NewListing = () => {
  return (
    <>
      <div className="bg-white md:mx-6 lg:mx-96 my-6 md:my-12 lg:my-24 p-6 md:p-10 lg:p-16">
        <div className="flex flex-col items-center md:items-start lg:items-center">
          {/* Title */}
          <div className="flex justify-center items-center lg:justify-start pb-4">
            <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold">Create new listing</h1>
          </div>
          {/* Form: job title/dept/date */}
          <div className="w-full md:w-4/5 lg:w-3/4 xl:w-1/2">
            <form className="space-y-4 text-lg md:text-xl lg:text-lg">
              <div className="flex flex-col md:flex-row md:items-center">
                <label htmlFor="role-input" className="w-full md:w-1/3 text-center md:text-right md:mr-4">
                  Job title:
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
                  Department:
                </label>
                <input
                  type="text"
                  id="dept-input"
                  name="dept"
                  className="form-input w-full md:w-2/3 lg:w-3/4 block rounded-md border-2 border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <label htmlFor="closing-date-input" className="w-full md:w-1/3 text-center md:text-right md:mr-4">
                  Closing date:
                </label>
                <input
                  type="date"
                  id="closing-date-input"
                  name="closing-date"
                  className="form-input w-full md:w-2/3 lg:w-3/4 block rounded-md border-2 border-black  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </form>
          </div>

          {/* div controlling radio elements  */}
          <div className="w-full md:flex md:w-4/5 lg:w-3/4 xl:w-1/2 mt-8 justify-between">
            {/*Hours Type - Fulltime/parttime  */}
            <div className="py-2 md:w-1/3">
              <ul className="space-y-2 text-lg md:text-xl lg:text-lg">
                <legend className="text-xl lg:text-2xl font-bold">Role Basis:</legend>
                <div>
                  <li>
                    <label htmlFor="fulltime-input" className="inline-flex items-center">
                      <input type="radio" id="fulltime-input" name="hours" checked />
                      <span className="ml-3">Full Time</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="parttime-input" className="inline-flex items-center">
                      <input type="radio" id="parttime-input" name="hours" />
                      <span className="ml-3">Part Time</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="other-input" className="inline-flex items-center">
                      <input type="radio" id="other-input" name="hours" />
                      <span className="ml-3">Other</span>
                    </label>
                  </li>
                </div>
              </ul>
            </div>

            {/* Permanent/contract etc */}
            <div className="py-3 border-t-2 border-dotted md:w-1/3">
              <ul className="space-y-2 text-lg md:text-xl lg:text-lg">
                <legend className="text-xl lg:text-2xl font-bold">Role type:</legend>
                <div>
                  <li>
                    <label htmlFor="permanent-input" className="inline-flex items-center">
                      <input type="radio" id="permanent-input" name="type" checked />
                      <span className="ml-3">Permanent</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="contract-input" className="inline-flex items-center">
                      <input type="radio" id="contract-input" name="type" />
                      <span className="ml-3">Contract</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="parental-input" className="inline-flex items-center">
                      <input type="radio" id="parental-input" name="type" />
                      <span className="ml-3">Parental Leave Cover</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="secondment-input" className="inline-flex items-center">
                      <input type="radio" id="secondment-input" name="type" />
                      <span className="ml-3">Secondment</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="other-input" className="inline-flex items-center">
                      <input type="radio" id="other-input" name="type" />
                      <span className="ml-3">Other</span>
                    </label>
                  </li>
                </div>
              </ul>
            </div>

            {/*Location: on site etc */}
            <div className="py-3 border-t-2 border-dotted md:w-1/3">
              <ul className="space-y-2 text-lg md:text-xl lg:text-lg">
                <legend className="text-xl lg:text-2xl font-bold">Role location:</legend>
                <div>
                  <li>
                    <label htmlFor="onsite-input" className="inline-flex items-center">
                      <input type="radio" id="onsite-input" name="location" checked />
                      <span className="ml-3">On Site</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="hybrid-input" className="inline-flex items-center">
                      <input type="radio" id="hybrid-input" name="location" />
                      <span className="ml-3">Hybrid</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="other-input" className="inline-flex items-center">
                      <input type="radio" id="other-input" name="location" />
                      <span className="ml-3">Other</span>
                    </label>
                  </li>
                </div>
              </ul>
            </div>
          </div>

          {/* Description */}
          <div className="w-full md:w-4/5 lg:w-3/4 xl:w-1/2 border-t-2 border-dotted mt-8">
            <div className="my-3">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Job Description:</h2>
            </div>
            <div className="my-4">
              <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                Use this section to provide a brief description of the role, including key responsibilities and any
                essential skills or qualifications required.
                <br />
                You may include up to 3 bullet points and a full description.
              </p>
            </div>

            <form className="space-y-4 text-base md:text-lg lg:text-xl">
              <div className="flex flex-col md:flex-row md:items-center">
                <label htmlFor="bullet-point-1" className="w-full md:w-1/3 text-center md:text-right md:mr-4">
                  Bullet point 1:
                </label>
                <input
                  type="text"
                  id="bullet-point-1"
                  name="bullet-points"
                  className="form-input w-full md:w-2/3 lg:w-3/4 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <label htmlFor="bullet-point-2" className="w-full md:w-1/3 text-center md:text-right md:mr-4">
                  Bullet point 2:
                </label>
                <input
                  type="text"
                  id="bullet-point-2"
                  name="bullet-points"
                  className="form-input w-full md:w-2/3 lg:w-3/4 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <label htmlFor="bullet-point-3" className="w-full md:w-1/3 text-center md:text-right md:mr-4">
                  Bullet point 3:
                </label>
                <input
                  type="text"
                  id="bullet-point-3"
                  name="bullet-points"
                  className="form-input w-full md:w-2/3 lg:w-3/4 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </form>
            <form className="mt-4 lg:mt-8 text-lg md:text-xl lg:text-lg">
              <label htmlFor="job-desc-input" className="font-normal leading-tight text-blue-gray-400">
                Full description:
              </label>
              <textarea
                name="job-description"
                id="job-desc-input"
                className="form-input text-xl w-full h-80 block overflow-y-auto rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder-gray-400 placeholder-shown:text-sm placeholder-shown:leading-[3.75] "
              ></textarea>
            </form>
          </div>

          {/* On/Off Slider */}
          <div className="inline-flex items-center justify-center my-3">
            <label htmlFor="listing-active" className="mr-4 text-lg md:text-xl lg:text-lg">
              Active on site:
            </label>
            <div className="relative inline-block w-28 h-4 content-center rounded-full cursor-pointer">
              <input
                id="listing-active"
                type="checkbox"
                className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-gray-500 checked:bg-green-500  peer-checked:border-gray-900 peer-checked:before:bg-blue-500"
              />
              <label
                htmlFor="listing-active"
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

export default NewListing;
