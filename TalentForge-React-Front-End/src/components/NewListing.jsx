import React from 'react'

const NewListing = () => {
  return (
    <>
    <div className='flex flex-col m-3 mx-8 md:m-5 lg:my-2 lg:mx-80'>
        {/* Title */}
        <div className='flex justify-center pt-4 lg:pt-10 lg:pb-4'>
            <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold'>Create new listing</h1>
        </div>
        {/* Form */}
            <div className='py-2 md:py-2 lg:py-2'>
                <form className='text-lg md:text-lg lg:text-lg'>
                    <div className='py-3 md:py-6 lg:py-6'>
                        <label htmlFor="role-input">Role: </label>
                        <input type="text" id="role-input" name="role" />
                    </div>
                    <div className='py-3 md:py-6 lg:py-6'>
                        <label htmlFor="dept-input">Department: </label>
                        <input type="text" id="dept-input" name="dept" />
                    </div>
                    <div className='py-3 md:py-6 lg:py-6'>
                        <label htmlFor="closing-date-input">Closing Date: </label>
                        <input type="date" id="closing-date-input" name="closing-date" />
                    </div>
                </form>
            </div>

            {/*Hours Type - Fulltime/parttime  */}
            <div>
                <form className='text-lg md:text-lg lg:text-lg'>
                    <fieldset>
                        <legend>Role Basis:</legend>
                        <div>
                            <label htmlFor="fulltime-input">Full Time: </label>
                            <input type="radio" id="fulltime-input" name="hours" checked />

                            <label htmlFor="parttime-input">Part Time: </label>
                            <input type="radio" id="parttime-input" name="hours" />

                            <label htmlFor="other-input">Other: </label>
                            <input type="radio" id="other-input" name="hours" />
                        </div>
                    </fieldset>
                </form>
            </div>

            {/* Permanent/contract etc */}
            <div>
                <form className='text-lg md:text-lg lg:text-lg'>
                    <fieldset>
                        <legend>Role type:</legend>
                        <div>
                            <label htmlFor="permanent-input">Permanent: </label>
                            <input type="radio" id="permanent-input" name="type" checked />

                            <label htmlFor="contract-input">Contract: </label>
                            <input type="radio" id="contract-input" name="type" />

                            <label htmlFor="parental-input">Parental Leave Cover: </label>
                            <input type="radio" id="parental-input" name="type" checked />

                            <label htmlFor="secondment-input">Secondment: </label>
                            <input type="radio" id="secondment-input" name="type" />

                            <label htmlFor="other-input">Other: </label>
                            <input type="radio" id="other-input" name="type" />
                        </div>
                    </fieldset>
                </form>
            </div>

            {/*Location: on site etc */}
            <div>
                <form className='text-lg md:text-lg lg:text-lg'>
                    <fieldset>
                        <legend>Role location:</legend>
                        <div>
                            <label htmlFor="onsite-input">On Site: </label>
                            <input type="radio" id="onsite-input" name="location" checked />

                            <label htmlFor="hybrid-input">Hybrid: </label>
                            <input type="radio" id="hybrid-input" name="location" />

                            <label htmlFor="other-input">Other: </label>
                            <input type="radio" id="other-input" name="location" />
                        </div>
                    </fieldset>
                </form>
            </div>

            {/* Description */}
            <div>
                <div>
                    <h2 className='text-3xl md:text-6xl lg:text-8xl font-bold'>Job Description:</h2>
                </div>
                    <label htmlFor="job-desc-input"></label>
                    <textarea name="job-description" id="job-desc-input" cols="40" rows="10"></textarea>
                <div></div>
                <div></div>
            </div>

            {/* On/Off Slider */}
            <div className="inline-flex items-center justify-between mx-8 md:mx-8 lg:mx-8 my-3 md:my-3 lg:my-3">
                <label htmlFor="listing-active"
                        className="mt-px mb-0 text-lg md:text-lg lg:text-lg">
                        Active on site:
                </label>
                <div className="relative inline-block w-28 h-4 content-center rounded-full cursor-pointer">
                    <input id="listing-active"
                            type="checkbox"
                            // colouration of on portion and off portion - duration of movement of slider
                            className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-gray-500 checked:bg-green-500  peer-checked:border-gray-900 peer-checked:before:bg-blue-500"
                             />
                    <label htmlFor="listing-active"
                            // slider marker size/colour
                            className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900">
                        {/* <div className="inline-block p-5 rounded-full top-3/4 left-1/4 -translate-x-3/4 -translate-y-1/4"
                        data-ripple-dark="true">
                        </div> */}
                    </label>
                </div>
            </div>

            {/* Buttons */}
            <div className='flex flex-col justify-center'>
                <button type="submit" className='className="bg-white hover:bg-dark-blue text-dark-blue font-semibold text-2xl md:text-3xl hover:text-white m-2 py-1 px-5 h-12  min-w-64 max-w-80 border border-blue-500 hover:border-transparent rounded'>Save</button>
                <button type="submit" className='className="bg-white hover:bg-dark-blue text-dark-blue font-semibold text-2xl md:text-3xl hover:text-white m-2 py-1 px-5 h-12  min-w-64 max-w-80 border border-blue-500 hover:border-transparent rounded'>Close</button>
            </div>



    </div>
    </>
  )
}

export default NewListing