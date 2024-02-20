import React from 'react'
import '../assets/css/HomePage.css'

const HomePage = () => {
  return (
    <>
      <div className="bg-hero bg-cover bg-bottom h-screen ">
      </div>

      <div className="flex justify-center">
      <h1 className='text-white text-5xl lg:text-7xl absolute inset-y-28 md:inset-y-44 max-w-full md:max-w-lg lg:max-w-3xl sm:px-10'>Welcome &#39;user.name&#39; to TalentForge</h1>

      <h2 className='text-white text-3xl lg:text-4xl absolute inset-y-72 md:inset-y-96 max-w-full md:max-w-lg lg:max-w-3xl sm:px-10'>This is your home of....explore, interact, opportunities, develop...mission statement/blurb/ intro to let users know about the site and all of the benefits they can expect from it...<br/><br/>Select one of the links below to get started!</h2>
      <button type="submit" className=" bg-grey hover:bg-dark-blue text-dark-blue font-semibold hover:text-white m-2 py-1 px-5 border border-blue-500 hover:border-transparent rounded">Login</button>

      </div>

      {/* <div className='flex justify-center '>
      <button type="submit" className="bg-grey hover:bg-dark-blue text-dark-blue font-semibold hover:text-white m-2 py-1 px-5 border border-blue-500 hover:border-transparent rounded">Login</button>
      <button type="submit" className="bg-grey hover:bg-dark-blue text-dark-blue font-semibold hover:text-white m-2 py-1 px-5 border border-blue-500 hover:border-transparent rounded">Ok</button>

      </div> */}

    </>
  )
}
// Internal-Hiring-App-Front-End/TalentForge-React-Front-End/src/assets/backgrounds/hi-tech-concepts-on-blue-background-hero-header.jpg
export default HomePage