import React from 'react'

const ViewListing = ( {listing} ) => {
    // const listing = { id, title, description, department, location, salary, datePosted, dateClosing, roleType, roleDuration, newListing, listingStatus, applicants }


    return (
    <>
        <div className='flex m-1 max-h-max'>
            <div className=''>
                {/* Listing header */}
                <div className='flex justify-center'>
                    <h1 className='text-4xl font-bold'>&#39;listing.title&#39;</h1>
                </div>
                {/* Listing subheader */}
                <div className='flex justify-center'>
                    <h2 className='text-2xl font-bold'>&#39;listing.department&#39;</h2>
                </div>
                {/* Listing top level info */}
                <div className='mx-1 my-4'>
                    <div className='flex justify-start ml-6'>
                        <h4 className='text-lg font-bold'>&#39;listing.datePosted&#39;</h4>
                    </div>
                    <div className='flex justify-start ml-6'>
                        <h4 className='text-lg font-bold'>&#39;listing.location&#39;</h4>
                        <p className='text-sm italic text-indigo-500'>e.g. Hybrid, On Site</p>
                    </div>
                    <div className='flex justify-start ml-6'>
                        <h4 className='text-lg font-bold'>&#39;listing.roleType&#39;</h4>
                        <p className='text-sm italic text-indigo-500'>e.g. Full time, part time</p>
                    </div>
                    <div className='flex justify-start ml-6'>
                        <h4 className='text-lg font-bold'>&#39;listing.roleDuration&#39;</h4>
                        <p className='text-sm italic text-indigo-500'>e.g. Temporary, Contract</p>
                    </div>
                </div>

                <div className='flex flex-col justify-start mx-8 my-4 '>
                        {/* List job bullet points */}
                        <div className='list-disc list-inside text-lg'>
                            {/* {listing.description.points.map(point => {
                                    <li>{point}</li>
                                })
                            } */}
                            <li>Job point 1</li>
                            <li>Job point 2</li>
                            <li>Job point 3</li>
                            <li>Job point 4</li>
                        </div>

                        {/* Full job description */}
                        <div className='flex-wrap leading-tight' >
                            {/* <p>&#39;listing.description.text&#39;<br/></p> */}
                            <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laudantium, aut distinctio impedit esse eos unde, quasi voluptates officiis rem ex iste nemo debitis soluta ut earum! Sed numquam doloremque quo magnam ullam? Rem quod vel repellendus fugit beatae quaerat.</p>
                        </div>
                </div>
                {/* Apply Now button */}
                <div className='flex justify-center my-3'>
                <button type="submit" className="bg-white hover:bg-dark-blue text-dark-blue font-semibold text-2xl md:text-3xl hover:text-white m-2 py-1 px-5 h-12  min-w-64 max-w-80 border border-blue-500 hover:border-transparent rounded">Apply Now</button>
                </div>
                {/* Closing date */}
                <div className='flex justify-center mx-8 my-3 italic '>
                    <p className='text-lg  text-red-500'>Closing Date: &#39;listing.closingDate&#39;</p>
                </div>

            </div>
        </div>
    </>
  )
}

export default ViewListing