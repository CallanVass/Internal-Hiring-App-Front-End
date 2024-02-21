import React from 'react'
import '../assets/css/HomePage.css'


const HomePage = () => {
  return (
    <>
      {/* Main container */}
      <div className="flex-col m-auto max-h-max">
      {/* Background image -- can be changed... */}
        <div className="bg-hero bg-cover bg-bottom">

        {/* Text content */}
        <div className="flex justify-center p-2 ">
        <div className="flex flex-col justify-center my-4">
          <h1 className='text-white text-5xl md:text-6xl lg:text-7xl inset-y-28 h-fit md:inset-y-44 max-w-full md:max-w-lg lg:max-w-3xl px-10 mb-5'>Welcome &#39;user.name&#39; to TalentForge</h1>
          <h2 className='text-white text-3xl lg:text-4xl inset-y-72 md:inset-y-96 h-fit max-w-full md:max-w-lg lg:max-w-3xl px-10 mb-5'>This is your home of....explore, interact, opportunities, develop...mission statement/blurb/ intro to let users know about the site and all of the benefits they can expect from it...<br/><br/>Select one of the links below to get started!</h2>
        </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center p-2">
          <div className='flex flex-col'>
            <button type="submit" className="bg-white hover:bg-dark-blue text-dark-blue font-semibold text-2xl md:text-3xl hover:text-white m-2 py-1 px-5 h-12  min-w-64 max-w-80 border border-blue-500 hover:border-transparent rounded">Latest Jobs</button>
            <button type="submit" className="bg-white hover:bg-dark-blue text-dark-blue font-semibold text-2xl md:text-3xl hover:text-white m-2 py-1 px-5 h-12 min-w-64 max-w-80 border border-blue-500 hover:border-transparent rounded">My Profile</button>
            <button type="submit" className="bg-white hover:bg-dark-blue text-dark-blue font-semibold text-2xl md:text-3xl hover:text-white m-2 py-1 px-5 h-12 min-w-64 max-w-80 border border-blue-500 hover:border-transparent rounded">Company Network</button>

          </div>
      </div>
    </div>
  </div>
</>
  )
}

export default HomePage