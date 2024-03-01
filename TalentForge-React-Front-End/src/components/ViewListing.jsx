/*
Attempted several methods to get the data to display in the ViewListing component.
The issue is this: the listing is 'known' in the Opportunities component (it is stored in context) - clicking on a listing
causes a call to App.jsx (as all routes are in App.jsx) - this means that the identity of the listing needs to be passed from
Opportunities (where it was clicked) to App (which knows where the data is to render a listing) then from App to ViewListing
(which actually renders the page and its components). However the ViewListing component, has no visibility of listing - it is 'unknown'.
*/


import React, { useContext } from "react"
import "../assets/css/ViewListing.css"
import { ListingContext } from "./Opportunities"


const ViewListing = ({ listing }) => {

  document.title = "View Listing";
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
            <h2 className="text-2xl md:text-4xl lg:text-4xl">&#39;listing.department&#39;</h2>
          </div>
          <div className="flex justify-center items-center flex-col sm:flex-col md:flex-col lg:flex-row">
            {/* Listing top level info */}
            <div className="top-level-info mx-2 sm:mx-4 md:mx-4 lg:mx-4 my-2 md:my-4 lg:my-4">
              <h4 className="info-title text-lg md:text-3xl lg:text-3xl flex justify-start pt-2">
                &#39;listing.datePosted&#39;
              </h4>
              <p className="info-description text-sm italic text-washed-blue flex justify-start pt-2">
                e.g. Hybrid, On Site
              </p>

              <h4 className="info-title text-lg md:text-3xl lg:text-3xl flex justify-start pt-2">
                &#39;listing.location&#39;
              </h4>
              <p className="info-description text-sm italic text-washed-blue flex justify-start pt-2">
                e.g. Hybrid, On Site
              </p>

              <h4 className="info-title text-lg md:text-3xl lg:text-3xl flex justify-start pt-2">
                &#39;listing.roleType&#39;
              </h4>
              <p className="info-description text-sm italic text-washed-blue flex justify-start pt-2">
                e.g. Full time, part time
              </p>

              <h4 className="info-title text-lg md:text-3xl lg:text-3xl flex justify-start pt-2">
                &#39;listing.roleDuration&#39;
              </h4>
              <p className="info-description text-sm italic text-washed-blue flex justify-start pt-2">
                e.g. Temporary, Contract
              </p>
            </div>

            {/* Job points */}
            <div className="job-points mx-7 md:mx-11 lg:mx-11 my-2 md:my-4 lg:my-4">
              <div className="list-disc list-inside text-lg md:text-3xl lg:text-3xl">
                <li>Job point 1</li>
                <li>Job point 2</li>
                <li>Job point 3</li>
                <li>Job point 4</li>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center mx-2 md:mx-4 lg:mx-4 my-4 md:my-6 lg:my-6">
            {/* Full job description */}
            <div className="mx-8 my-2 md:my-4 lg:my-4">
              <p className=" text-center md:text-2xl lg:text-2xl" id="para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laudantium, aut distinctio impedit esse
                eos unde, quasi voluptates officiis rem ex iste nemo debitis soluta ut earum! Sed numquam doloremque quo
                magnam ullam? Rem quod vel repellendus fugit beatae quaerat.
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
            <p className="text-lg md:text-2xl lg:text-2xl text-red-500">Closing Date: &#39;listing.closingDate&#39;</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewListing;
