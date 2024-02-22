import React from 'react'
import '../assets/css/ViewListing.css'

const ViewListing = ( {listing} ) => {
    // const listing = { id, title, description, department, location, salary, datePosted, dateClosing, roleType, roleDuration, newListing, listingStatus, applicants }


    return (
    <>
        <div className='flex m-1 md:m-5 lg:my-2 lg:mx-80'>
            <div className=''>
                {/* Listing header */}
                <div className='flex justify-center pt-4 lg:pt-10 lg:pb-4'>
                    <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold'>&#39;listing.title&#39;</h1>
                </div>
                {/* Listing subheader */}
                <div className='flex justify-center'>
                    <h2 className='text-2xl md:text-4xl lg:text-6xl'>&#39;listing.department&#39;</h2>
                </div>
                {/* Listing top level info */}
                <div className='mx-7 md:mx-11 lg:mx-11 my-4 md:my-8 lg:my-8'>
                    <div className='flex justify-start pt-2'>
                        <h4 className='text-lg md:text-3xl lg:text-5xl '>&#39;listing.datePosted&#39;</h4>
                    </div>
                    <div className='flex justify-start pt-2'>
                        <h4 className='text-lg md:text-3xl lg:text-5xl '>&#39;listing.location&#39;</h4>
                        <p className='text-sm italic text-indigo-500'>e.g. Hybrid, On Site</p>
                    </div>
                    <div className='flex justify-start pt-2'>
                        <h4 className='text-lg md:text-3xl lg:text-5xl'>&#39;listing.roleType&#39;</h4>
                        <p className='text-sm italic text-indigo-500'>e.g. Full time, part time</p>
                    </div>
                    <div className='flex justify-start pt-2'>
                        <h4 className='text-lg md:text-3xl lg:text-5xl'>&#39;listing.roleDuration&#39;</h4>
                        <p className='text-sm italic text-indigo-500'>e.g. Temporary, Contract</p>
                    </div>
                </div>

                <div className='flex flex-col justify-start mx-8 md:mx-12 lg:mx-12 my-4 md:my-8 lg:my-8'>
                        {/* List job bullet points */}
                        <div className='list-disc list-inside text-lg md:text-3xl lg:text-5xl'>
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
                        <div className='flex-wrap my-4 md:my-6 lg:my-6' >
                            {/* <p>&#39;listing.description.text&#39;<br/></p> */}
                            <p className='text-xl md:text-4xl lg:text-4xl' id='para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laudantium, aut distinctio impedit esse eos unde, quasi voluptates officiis rem ex iste nemo debitis soluta ut earum! Sed numquam doloremque quo magnam ullam? Rem quod vel repellendus fugit beatae quaerat.</p>
                        </div>
                </div>
                {/* Apply Now button */}
                <div className='flex justify-center my-3'>
                <button type="submit" className="bg-white hover:bg-dark-blue text-dark-blue font-semibold text-2xl md:text-3xl lg:text-4xl hover:text-white m-2 py-1 px-5 h-12 lg:h-14 min-w-64 max-w-80 border border-blue-500 hover:border-transparent rounded">Apply Now</button>
                </div>
                {/* Closing date */}
                <div className='flex justify-center my-3 pb-6 italic '>
                    <p className='text-lg md:text-2xl lg:text-3xl text-red-500'>Closing Date: &#39;listing.closingDate&#39;</p>
                </div>

            </div>
        </div>
    </>
  )
}

export default ViewListing