/*
Attempted several methods to get the data to display in the ViewListing component.
The issue is this: the listing is 'known' in the Opportunities component (it is stored in context) - clicking on a listing
causes a call to App.jsx (as all routes are in App.jsx) - this means that the identity of the listing needs to be passed from
Opportunities (where it was clicked) to App (which knows where the data is to render a listing) then from App to ViewListing
(which actually renders the page and its components). However the ViewListing component, has no visibility of listing - it is 'unknown'.
*/


import React, { useState, useEffect } from "react"
import "../assets/css/ViewListing.css"
import { useParams } from "react-router-dom"



const ViewListing = () => {
  const [ listing, setListing ] = useState([])
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state
  const { id } = useParams()
  // let listing = ''
  console.log(id)
  // id = useParams()
  // const { id } = useParams()
  // const id = id.id

  document.title = "View Listing"


  useEffect(() => {
    const fetchListingData = async () => {
      setIsLoading(true);
      try {
        const token = sessionStorage.getItem('token'); // Retrieve the token
        if (!token) {
          throw new Error('No token found');
        }

        // Fetch user data using the userId
        const response = await fetch(`http://localhost:8002/listings/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch listing data');
        }

        const data = await response.json();
        setListing(data); // Set the listing data
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListingData();
  }, [id]);

  // Date function to format date into dd/mm/yy
  function dateFormat(stringDate) {
    const date = new Date(stringDate)

    const day = String(date.getUTCDate()).padStart(2, '0')
    const month = String(date.getUTCMonth() + 1).padStart(2, '0')
    const year = String(date.getUTCFullYear()).slice(-2)

    return `${day}/${month}/${year}`
  }


  console.log(listing)

  return (
    <>
      <div className="flex justify-center p-4 md:p-8 lg:p-4 xl:p-12 bg-grey">
        <div className="bg-white border border-gray-300 mt-6 mb-6">
          {/* Listing header */}
          <div className="flex justify-center pt-4 lg:pt-10 lg:pb-4">
            <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold">{listing.title}</h1>
          </div>
          {/* Listing subheader */}
          <div className="flex justify-center">
            <h2 className="text-2xl md:text-4xl lg:text-4xl">{listing.department}</h2>
          </div>
          <div className="flex justify-center items-center flex-col sm:flex-col md:flex-col lg:flex-row">
            {/* Listing top level info */}
            <div className="top-level-info mx-2 sm:mx-4 md:mx-4 lg:mx-4 my-2 md:my-4 lg:my-4">
              <h4 className="info-title text-lg md:text-3xl lg:text-3xl flex justify-start pt-2">
                {dateFormat(listing.datePosted)}
              </h4>
              <p className="info-description text-sm italic text-washed-blue flex justify-start pt-2">
                e.g. Hybrid, On Site
              </p>

              <h4 className="info-title text-lg md:text-3xl lg:text-3xl flex justify-start pt-2">
                {listing.location}
              </h4>
              <p className="info-description text-sm italic text-washed-blue flex justify-start pt-2">
                e.g. Hybrid, On Site
              </p>

              <h4 className="info-title text-lg md:text-3xl lg:text-3xl flex justify-start pt-2">
                {listing.roleType}
              </h4>
              <p className="info-description text-sm italic text-washed-blue flex justify-start pt-2">
                e.g. Full time, part time
              </p>

              <h4 className="info-title text-lg md:text-3xl lg:text-3xl flex justify-start pt-2">
                {listing.roleDuration}
              </h4>
              <p className="info-description text-sm italic text-washed-blue flex justify-start pt-2">
                e.g. Temporary, Contract
              </p>
            </div>

            {/* Job points */}
            <div className="job-points mx-7 md:mx-11 lg:mx-11 my-2 md:my-4 lg:my-4">
              <div className="list-disc list-inside text-lg md:text-3xl lg:text-3xl">
                <li>{listing.description.points[0] && listing.description.points[0]}</li>
                <li>{listing.description.points[1] && listing.description.points[1]}</li>
                <li>{listing.description.points[2] && listing.description.points[2]}</li>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center mx-2 md:mx-4 lg:mx-4 my-4 md:my-6 lg:my-6">
            {/* Full job description */}
            <div className="mx-8 my-2 md:my-4 lg:my-4">
              <p className=" text-center md:text-2xl lg:text-2xl" id="para">
                {listing.description.text}
              </p>
            </div>
          </div>
          {/* Apply Now button */}
          <div className="flex justify-center my-3">
            <button
              type="submit"
              className="bg-dark-green hover:bg-dark-blue text-white font-semibold text-2xl md:text-3xl lg:text-4xl hover:text-white m-2 py-1 px-5 h-12 lg:h-14 min-w-64 max-w-80 border border-gray-300 hover:border-transparent rounded"
            >
              Apply Now
            </button>
          </div>
          {/* Closing date */}
          <div className="flex justify-center my-3 pb-6 italic ">
            <p className="text-lg md:text-2xl lg:text-2xl text-red-500">Closing Date: {dateFormat(listing.dateClosing)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewListing;
