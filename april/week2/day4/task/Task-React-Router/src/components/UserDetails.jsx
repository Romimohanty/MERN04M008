import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'

function UserDetails() {
    const { id } = useParams(); 
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
        const foundUser = savedUsers.find((u) => u.id === id);
        setUser(foundUser);
    }, [id]);

    if (!user) {
        return (
            <div className="text-center mt-20">
                <h1 className="text-3xl text-red-600 font-bold mb-4">User Not Found</h1>
                <button onClick={() => navigate('/')} className="text-blue-500 underline">Go Back to Home</button>
            </div>
        )
    }

    return (
        <div className="flex justify-center items-center mt-20">
            <div className="p-10 border shadow-2xl rounded-2xl bg-white max-w-sm w-full">
                <h1 className="text-2xl font-bold border-b mb-6 pb-2 text-center text-purple-800">User Profile</h1>
                <div className="space-y-4">
                    <p className="text-lg"><strong>Name:</strong> {user.name}</p>
                    <p className="text-lg"><strong>Email:</strong> {user.email}</p>
                    <p className="text-lg"><strong>Age:</strong> {user.age}</p>
                </div>
                <button 
                    onClick={() => navigate('/')} 
                    className="mt-8 w-full bg-gray-800 text-white p-2 rounded hover:bg-black transition"
                >
                    Back to List
                </button>
            </div>
        </div>
    )
}
export default UserDetails;