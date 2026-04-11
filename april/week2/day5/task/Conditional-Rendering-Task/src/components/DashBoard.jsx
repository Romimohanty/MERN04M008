import React from 'react';
import { useNavigate } from 'react-router';

function DashBoard() {
    const navigate = useNavigate();
    // Stored data se user ka naam nikalna
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    const handleLogout = () => {
        localStorage.setItem("isLogin", false); // Login state clear karna
        navigate("/login");
    };

    return (
        <div className="p-10 text-center">
            <h1 className="text-3xl font-bold">Welcome, {storedUser ? storedUser.name : "User"}!</h1>
            <button 
                onClick={handleLogout} 
                className="mt-6 bg-red-500 text-white p-2 rounded">
                Logout
            </button>
        </div>
    );
}

export default DashBoard;