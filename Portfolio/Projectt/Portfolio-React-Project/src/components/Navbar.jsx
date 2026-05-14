
import React from 'react'
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className='h-16 w-full bg-blue-900/80 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-10 sticky top-0 z-50'>
      
      <div className="flex items-center gap-2 text-2xl font-extrabold cursor-pointer">
        <FaLessThan className="text-blue-400" />
        <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
          Romi/Mohanty
        </span>
        <FaGreaterThan className="text-blue-400" />
      </div>

      <div className="hidden md:flex items-center gap-10 text-lg font-bold">
        <a href="#about" className="text-gray-300 hover:text-white transition duration-300">About</a>
        <a href="#skill" className="text-gray-300 hover:text-white transition duration-300">Skill</a>
        <a href="#project" className="text-gray-300 hover:text-white transition duration-300">Project</a>
        <a href="#contact" className="text-gray-300 hover:text-white transition duration-300">Contact</a>
      </div>

      <button 
        onClick={() => window.open("https://github.com/Romimohanty", "_blank")}
        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:scale-105 transition duration-300 font-bold"
      >
        Github Profile
      </button>

    </nav>
  )
}

export default Navbar