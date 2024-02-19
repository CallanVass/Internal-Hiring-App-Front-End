import React from 'react'

const Profile = () => {
  return (
    <>
    <div className="flex items-center space-x-4 max-w-lg mx-auto sm:bg-red-600" >
      <img src="path-to-your-image.jpg" alt="Descriptive Text" className="w-1/3" />
      <div className="flex-1"> {/* This div takes up the rest of the space */}
        <h2 className="text-xl font-bold mb-2">Your Title Here</h2>
        <p className="text-gray-700">
          Your text goes here. This is some additional text to fill out the paragraph so you can see how it lays out.
        </p>
      </div>
    </div>
    </>
  )
}

export default Profile