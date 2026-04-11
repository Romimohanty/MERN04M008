import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // User ka data object bana kar store karna
        const userData = { name, email, password };
        localStorage.setItem("userData", JSON.stringify(userData));
        
        alert("Registration Successful!");
        navigate("/login"); // Login page par bhejna
    };

    return (
        <div className="flex flex-col items-center p-10">
            <h1 className="text-2xl font-bold">Register Page</h1>
            <form onSubmit={handleRegister} className="flex flex-col gap-3 border p-5 mt-4">
                <input type="text" placeholder="Name" className="border p-2" onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" className="border p-2" onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" className="border p-2" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" className='bg-purple-600 p-2 rounded text-white'>Register</button>
            </form>
        </div>
    );
}

export default Register;