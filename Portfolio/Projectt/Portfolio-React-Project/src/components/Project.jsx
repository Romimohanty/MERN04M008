import React from 'react'
import { Link } from "react-router"
import profileImg from "../assets/WhatsApp Image 2026-04-25 at 4.19.09 PM (1).jpeg";
import projectImg from "../assets/WhatsApp Image 2026-04-25 at 4.19.08 PM.jpeg";
import  { useState, useEffect,useRef } from 'react'
import myImg from "../assets/WhatsApp Image 2026-04-25 at 5.33.49 PM.jpeg";

function Project() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    

<div className='w-full h-300  bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16'>
      
      <h1 className={`text-5xl text-center font-bold mb-16 transition-all duration-700 
      ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
        PROJECTS
      </h1>

      <div className='grid md:grid-cols-2 gap-12 px-6 md:px-20'>

        <div className={`group bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl 
        transition-all duration-700 transform hover:scale-105 hover:shadow-2xl
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>

          <div className='overflow-hidden'>
            <img 
              src={profileImg} 
              alt="project1"
              className='w-full h-72 object-cover group-hover:scale-110 transition duration-500'
            />
          </div>

          <div className='p-6'>
            <h2 className='text-2xl font-semibold'>Anand Sweet Clone</h2>

            <p className='text-sm mt-3 text-gray-300'>
              Built in 5 days with login, register and add-to-cart features.
            </p>

            <p className='mt-3 text-sm'>
              <span className='font-semibold'>Tech:</span> HTML, CSS, JS, Tailwind
            </p>

            <div className='flex gap-4 mt-5'>
              <Link 
                to="https://leafy-puffpuff-8e171e.netlify.app/" 
                target="_blank"
                className='flex-1 text-center bg-blue-600 py-3 rounded-lg hover:bg-blue-700 transition'
              >
                Live
              </Link>

              <Link 
                to="https://github.com/Romimohanty/MERN04M008/tree/23c6e0ce1dcd24a599e4d4badbbd540c6a0950a8/march/week4/innovation"
                target="_blank"
                className='flex-1 text-center border py-3 rounded-lg hover:bg-white hover:text-black transition'
              >
                Code
              </Link>
            </div>
          </div>
        </div>

        <div className={`group bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl 
        transition-all duration-700 delay-200 transform hover:scale-105 hover:shadow-2xl
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>

          <div className='overflow-hidden'>
            <img 
              src={projectImg} 
              alt="project2"
              className='w-full h-72 object-cover group-hover:scale-110 transition duration-500'
            />
          </div>

          <div className='p-6'>
            <h2 className='text-2xl font-semibold'>Cinema Project</h2>

            <p className='text-sm mt-3 text-gray-300'>
              Built in 3 days with login, register, cart and search features.
            </p>

            <p className='mt-3 text-sm'>
              <span className='font-semibold'>Tech:</span> React, Tailwind
            </p>

            <div className='flex gap-4 mt-5'>
              <Link 
                to="https://snazzy-selkie-572572.netlify.app/" 
                target="_blank"
                className='flex-1 text-center bg-blue-600 py-3 rounded-lg hover:bg-blue-700 transition'
              >
                Live
              </Link>

              <Link 
                to="https://github.com/Romimohanty/MERN04M008/tree/23c6e0ce1dcd24a599e4d4badbbd540c6a0950a8/april/week3"
                target="_blank"
                className='flex-1 text-center border py-3 rounded-lg hover:bg-white hover:text-black transition'
              >
                Code
              </Link>
            </div>
          </div>
        </div>

      </div>




       
       <div className='w-full bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16 flex flex-col items-center'>

  <h1 className='text-4xl md:text-5xl font-bold mb-10 tracking-wide 
  animate-pulse'>
    GITHUB CALENDAR
  </h1>

  <div className='bg-white/10 backdrop-blur-lg p-6 md:p-10 rounded-3xl shadow-2xl 
  hover:scale-105 transition duration-500'>

    <img 
      src={myImg} 
      alt="GitHub Calendar"
      className='w-full max-w-4xl rounded-xl border border-white/20'
    />

  </div>

</div>

 
    </div>



    )
}

export default Project
