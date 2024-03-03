import { useNavigate } from "react-router-dom"


const NewListing = () => {
  document.title = "Create Listing";

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const formDataObj = Object.fromEntries(formData.entries())

        try {
          const response = await fetch('https://talent-forge-api-atu2.onrender.com/listings', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify(formDataObj),
          })

          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`)
          }

          const result = await response.json()

          navigate("/home")

        } catch (error) {
          console.error('Failed to create new listing:', error)

        }
      }


  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="bg-white mx-6 my-6 md:my-12 lg:my-24 p-6 md:p-10 lg:p-16 xl:mx-96">
        <div className="flex flex-col items-center md:items-start lg:items-center">
          {/* Title */}
          <div className="flex justify-center lg:justify-start pb-4">
            <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold">Create new listing</h1>
          </div>
          {/* Form: job title/dept/date */}
          <div className="w-full md:w-4/5 lg:w-3/4 xl:w-1/2">
            <br />
              <div className="flex flex-col md:flex-row md:items-center">
                <label htmlFor="role-input" className="w-full md:w-1/3 text-center md:text-right md:mr-4">
                  Job title:
                </label>
                <input
                  type="text"
                  id="role-input"
                  name="title"
                  className="form-input w-full md:w-2/3 lg:w-3/4 block rounded-md border-2 border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <br />
              <div className="flex flex-col md:flex-row md:items-center">
                <label htmlFor="dept-input" className="w-full md:w-1/3 text-center md:text-right md:mr-4">
                  Department:
                </label>
                <input
                  type="text"
                  id="dept-input"
                  name="department"
                  className="form-input w-full md:w-2/3 lg:w-3/4 block rounded-md border-2 border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <br />
              <div className="flex flex-col md:flex-row md:items-center">
                <label htmlFor="dept-input" className="w-full md:w-1/3 text-center md:text-right md:mr-4">
                  Salary:
                </label>
                <input
                  type="text"
                  id="dept-input"
                  name="salary"
                  className="form-input w-full md:w-2/3 lg:w-3/4 block rounded-md border-2 border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <br />
              <div className="flex flex-col md:flex-row md:items-center">
                <label htmlFor="closing-date-input" className="w-full md:w-1/3 text-center md:text-right md:mr-4">
                  Posting date:
                </label>
                <input
                  type="date"
                  id="closing-date-input"
                  name="datePosted"
                  className="form-input w-full md:w-2/3 lg:w-3/4 block rounded-md border-2 border-black  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <br />
              <div className="flex flex-col md:flex-row md:items-center">
                <label htmlFor="closing-date-input" className="w-full md:w-1/3 text-center md:text-right md:mr-4">
                  Closing date:
                </label>
                <input
                  type="date"
                  id="closing-date-input"
                  name="dateClosing"
                  className="form-input w-full md:w-2/3 lg:w-3/4 block rounded-md border-2 border-black  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
          </div>

          {/* div controlling radio elements  */}
          <div className="w-full md:w-4/5 lg:w-3/4 xl:w-1/2 mt-8 md:flex md:justify-between">
            {/*Hours Type - Fulltime/parttime  */}
            <div className="py-2 md:w-1/3">
              <ul className="space-y-2 text-lg md:text-xl lg:text-lg">
                <legend className="text-xl lg:text-2xl font-bold">Role Basis:</legend>
                <div>
                  <li>
                    <label htmlFor="fulltime-input" className="inline-flex items-center">
                      <input type="radio" id="fulltime-input" name="roleType" checked value="Full Time"/>
                      <span className="ml-3">Full Time</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="parttime-input" className="inline-flex items-center">
                      <input type="radio" id="parttime-input" name="roleType" value="Part Time"/>
                      <span className="ml-3">Part Time</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="other-input" className="inline-flex items-center">
                      <input type="radio" id="other-input" name="roleType" value="Full Time"/>
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
                      <input type="radio" id="permanent-input" name="roleDuration" checked value="Permanent"/>
                      <span className="ml-3">Permanent</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="contract-input" className="inline-flex items-center">
                      <input type="radio" id="contract-input" name="roleDuration" value="Contract"/>
                      <span className="ml-3">Contract</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="parental-input" className="inline-flex items-center">
                      <input type="radio" id="parental-input" name="roleDuration" value="Parental Leave Cover"/>
                      <span className="ml-3">Parental Leave Cover</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="secondment-input" className="inline-flex items-center">
                      <input type="radio" id="secondment-input" name="roleDuration" value="Secondment"/>
                      <span className="ml-3">Secondment</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="other-input" className="inline-flex items-center">
                      <input type="radio" id="other-input" name="roleDuration" value="Other"/>
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
                      <input type="radio" id="onsite-input" name="location" checked value="On Site"/>
                      <span className="ml-3">On Site</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="hybrid-input" className="inline-flex items-center">
                      <input type="radio" id="hybrid-input" name="location" value="Hybrid"/>
                      <span className="ml-3">Hybrid</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="other-input" className="inline-flex items-center">
                      <input type="radio" id="other-input" name="location" value="Other"/>
                      <span className="ml-3">Other</span>
                    </label>
                  </li>
                </div>
              </ul>
            </div>
          </div>

          {/* Description */}
          <div className="w-full md:w-4/5 lg:w-3/4 xl:w-1/2 border-t-2 border-dotted mt-8">
            <br />
              <label htmlFor="job-desc-input" className="font-normal leading-tight text-blue-gray-400">
                Full description:
              </label>
              <textarea
                name="description"
                id="job-desc-input"
                className="form-input text-xl w-full h-80 block overflow-y-auto rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder-gray-400 placeholder-shown:text-sm placeholder-shown:leading-[3.75] "
              ></textarea>

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
            </div>
          </div>
        </div>
      </div>
      </form>
    </>
  )
}

export default NewListing
