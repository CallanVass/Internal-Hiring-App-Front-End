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
                <form className='text-lg'>
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
                <form>
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
                <form>
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
                <form>
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
                    <textarea name="job-description" id="job-desc-input" cols="30" rows="10"></textarea>
                <div></div>
                <div></div>
            </div>

            <div>
            <label className="switch">Active on site</label>
            <input type="checkbox" />
            <span className="slider round"></span>
            </div>


            <div>
                <button type="submit">Submit</button>
            </div>



    </div>
    </>
  )
}

export default NewListing