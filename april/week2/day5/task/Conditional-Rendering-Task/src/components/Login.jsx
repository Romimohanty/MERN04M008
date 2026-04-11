import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();
        // localStorage se register kiya hua data nikalna
        const storedUser = JSON.parse(localStorage.getItem("userData"));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            localStorage.setItem("isLogin", true); // Login state set karna
            navigate("/dash");
        } else {
            alert("Error: Wrong Email or Password!"); // Galat hone par error message
        }
    }

    return (
        <div className="flex flex-col items-center p-10">
            <h1 className="text-2xl font-bold">Login page</h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-3 border p-5 mt-4">
                <input type="email" placeholder="Email" className="border p-2" onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" className="border p-2" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" className='bg-purple-600 p-2 rounded text-white'>Submit Login</button>
            </form>
        </div>
    );
}

export default Login;