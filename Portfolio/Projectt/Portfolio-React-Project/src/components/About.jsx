import React from 'react'
import profileImg from "../assets/WhatsApp Image 2026-04-25 at 4.19.09 PM.jpeg";


function About() {
  return (
    <div className='flex h-200 w-full   bg-gradient-to-r from-blue-900 to-gray-800 pt-40 pl-60'>
    
  <div className="max-w-xl space-y-5">
    
    <h1 className="text-2xl font-medium">
      Hii.. 😊👋 I am
    </h1>

    <h1 className="text-5xl font-extrabold">
      Romi Mohanty
    </h1>


<h2 className="text-2xl font-semibold text-purple-200 flex items-center gap-2">
  I am a
  <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-white animate-typing align-middle">
    MERN Stack Developer
  </span>
</h2>

    <p className="text-gray-200">
      I am a passionate MERN Stack Developer with a strong interest in building modern and responsive web applications. 
I love working with technologies like MongoDB, Express.js, React, and Node.js to create user-friendly and efficient solutions. 
I enjoy learning new skills and improving my coding knowledge every day.
    </p>

    <button className="mt-4 px-6 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-md hover:bg-purple-100 hover:scale-105 transition duration-300">
      Check Resume
    </button>

  </div>

  <div className="mt-10 md:mt-0 ml-20">
    <img 
      src= {profileImg}
      className="h-72 w-72 md:h-96 md:w-96 object-cover rounded-full border-4 border-white shadow-lg"
      alt="profile"
    />
  </div>

</div>
  )
}

export default About

