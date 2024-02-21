import React from 'react'

const ViewListing = ( {listing} ) => {
    // const listing = { id, title, description, department, location, salary, datePosted, dateClosing, roleType, roleDuration, newListing, listingStatus, applicants }


    return (
    <>
        <div className='flex-1 m-3'>
            <div>
                {/* Listing header */}
                <div className='flex justify-center'>
                    <h1 className='text-4xl font-bold'>&#39;listing.title&#39;</h1>
                </div>
                {/* Listing subheader */}
                <div className='flex justify-center'>
                    <h2 className='text-2xl font-bold'>&#39;listing.department&#39;</h2>
                </div>
                {/* Listing top level info */}
                <div className='ml-6 my-4'>
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

                <div className='flex justify-start ml-10 my-4'>
                    <div >
                        <div className='list-disc list-inside'>
                            {/* {listing.description.points.map(point => {
                                    <li>{point}</li>
                                })
                            } */}

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default ViewListing