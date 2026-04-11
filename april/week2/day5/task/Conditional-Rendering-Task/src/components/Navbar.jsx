import React from 'react'
import { Link, useNavigate } from 'react-router' // Aapke setup ke mutabiq sirf 'react-router'

function Navbar() {
    const navigate = useNavigate()

    // localStorage se login status check karna
    const isLogin = JSON.parse(localStorage.getItem("isLogin"))

    const handleAuthAction = () => {
        if (isLogin) {
            // Agar pehle se login hai, toh Logout karo
            localStorage.setItem("isLogin", false)
            navigate("/login")
        } else {
            // Agar login nahi hai, toh login page par bhejo
            navigate("/login")
        }
    }

    return (
        <div className='border-b p-4 flex justify-between items-center bg-gray-50'>
            <div className='flex gap-4'>
                {/* Navigation Links */}
                <Link to="/register" className="text-blue-600">Register</Link>
                <Link to="/dash" className="text-blue-600">Dashboard</Link>
            </div>

            <div>
                {/* Condition ke hisaab se Button Text badlega */}
                <button
                    className={`${isLogin ? 'bg-red-500' : 'bg-purple-600'} p-2 rounded text-white`}
                    onClick={handleAuthAction}>
                    {isLogin ? "Logout" : "Login"}
                </button>
            </div>
        </div>
    )
}

export default Navbar