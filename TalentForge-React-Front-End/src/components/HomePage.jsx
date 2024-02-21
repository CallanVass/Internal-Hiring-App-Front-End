import React from 'react'
import '../assets/css/HomePage.css'

// Need to look at additional breakpoints as text does not display correctly on very narrow screens incl Samsung S8 & iPhone SE

const HomePage = () => {
  return (
    <>
      <div className="bg-hero bg-cover bg-bottom h-screen ">
      </div>

      <div className="flex-col justify-items-start">
      <div className="flex justify-center">
      <h1 className='text-white text-5xl md:text-6xl lg:text-7xl absolute inset-y-28 md:inset-y-44 max-w-full md:max-w-lg lg:max-w-3xl sm:px-10'>Welcome &#39;user.name&#39; to TalentForge</h1>

      <h2 className='text-white text-3xl lg:text-4xl absolute inset-y-72 md:inset-y-96 max-w-full md:max-w-lg lg:max-w-3xl sm:px-10'>This is your home of....explore, interact, opportunities, develop...mission statement/blurb/ intro to let users know about the site and all of the benefits they can expect from it...<br/><br/>Select one of the links below to get started!</h2>


      </div>


      <div className='absolute flex flex-col left-16 md:left-1/3 -bottom-20 md:bottom-72 lg:-bottom-8 mt-7'>
      <button type="submit" className="bg-white hover:bg-dark-blue text-dark-blue font-semibold text-2xl md:text-3xl hover:text-white m-2 py-1 px-5 h-12 min-w-64  border border-blue-500 hover:border-transparent rounded">Latest Jobs</button>
      <button type="submit" className="bg-white hover:bg-dark-blue text-dark-blue font-semibold text-2xl md:text-3xl hover:text-white m-2 py-1 px-5 h-12 min-w-64 border border-blue-500 hover:border-transparent rounded">My Profile</button>
      <button type="submit" className="bg-white hover:bg-dark-blue text-dark-blue font-semibold text-2xl md:text-3xl hover:text-white m-2 py-1 px-5 h-12 min-w-64 border border-blue-500 hover:border-transparent rounded">Company Network</button>

      </div>
      </div>
    </>
  )
}

export default HomePage