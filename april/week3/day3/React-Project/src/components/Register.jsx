import React, { useState } from 'react'
import { Link } from 'react-router'
import { toast } from 'react-toastify';

function Register() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: ""
    })

    const handleChange = function (e) {
        const { value, name } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleRegister = (e) => {
        e.preventDefault();
        let existingLocalStUser = JSON.parse(localStorage.getItem("users")) || [];

        existingLocalStUser.push(formData);

        localStorage.setItem("users", JSON.stringify(existingLocalStUser))

        toast.success("successfully user created")
    }

    return (
        
<div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl">
        
        <div className="text-center mb-5 ">
          <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
        </div>

        <div className="space-y-4">
          
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none "
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold ">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold ">Mobile No</label>
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none "
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold ">Password</label>
            <input
              type="password"
              placeholder='Enter your password'
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none "
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg mt-6 shadow-lg transform transition active:scale-95"
            onClick={handleRegister}
          >
            Register Now
          </button>

          <p className="text-center text-gray-600 mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-purple-600 font-bold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>


    )
}

export default Register