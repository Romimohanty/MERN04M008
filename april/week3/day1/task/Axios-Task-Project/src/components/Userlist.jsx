import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);      
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);    

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError("Data lane me galti hui! " + err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); 

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h1>User Names List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;