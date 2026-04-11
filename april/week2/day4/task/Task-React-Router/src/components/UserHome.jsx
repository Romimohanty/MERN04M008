import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';

function UserHome() {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({ name: "", email: "", age: "" });
    const navigate = useNavigate(); 

    useEffect(() => {
        const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(savedUsers);
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newUser = { ...formData, id: Date.now().toString() };
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setFormData({ name: "", email: "", age: "" });
        alert("User Added!");
    }

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-5 text-center">User Management</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto border p-6 rounded shadow-lg bg-gray-50 mb-10">
                <div className="flex flex-col gap-4">
                    <input type="text" name="name" placeholder="Name" required className="border p-2 rounded" value={formData.name} onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" required className="border p-2 rounded" value={formData.email} onChange={handleChange} />
                    <input type="number" name="age" placeholder="Age" required className="border p-2 rounded" value={formData.age} onChange={handleChange} />
                    <button type="submit" className="bg-blue-600 text-white p-2 rounded font-bold hover:bg-blue-700">Add User</button>
                </div>
            </form>

            <hr className="my-10" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {users.map((user) => (
                    <div key={user.id} className="p-5 border shadow-xl rounded-xl bg-white flex flex-col gap-2">
                        <strong className="text-xl text-blue-900">{user.name}</strong>
                        <p className="text-gray-600">Email: {user.email}</p>
                        <p className="text-gray-600">Age: {user.age}</p>

                        <button 
                            onClick={() => navigate(`/user/${user.id}`)}
                            className="mt-4 bg-purple-700 text-white p-2 rounded-lg hover:bg-purple-800 transition"
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default UserHome;