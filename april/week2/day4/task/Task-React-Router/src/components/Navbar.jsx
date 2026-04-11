import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div className='p-4 border-b flex justify-evenly bg-white shadow-sm'>
        <Link to='/' className="font-bold text-blue-600 hover:text-blue-800">Home</Link>
        <span className="text-gray-400">User Management System</span>
    </div>

  )
}

export default Navbar