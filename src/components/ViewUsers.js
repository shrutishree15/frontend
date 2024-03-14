// components/ViewUsers.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users/view');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold text-center mb-4">User List</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse mx-auto">
          <thead>
            <tr>
              <th className="py-3 px-4 border border-gray-300">Name</th>
              <th className="py-3 px-4 border border-gray-300">Email</th>
              <th className="py-3 px-4 border border-gray-300">Referral Code</th>
              <th className="py-3 px-4 border border-gray-300">Referral Parent</th>
             <th className="py-3 px-4 border border-gray-300">Balance</th>
              <th className="py-3 px-4 border border-gray-300">id</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id} className="hover:bg-gray-100">
                <td className="py-3 px-4 border border-gray-300 font-semibold">{user.name}</td>
                <td className="py-3 px-4 border border-gray-300">{user.email}</td>
                <td className="py-3 px-4 border border-gray-300">{user.referralCode}</td>
                <td className="py-3 px-4 border border-gray-300">{user.referralParent}</td>
                <td className="py-3 px-4 border border-gray-300">{user.balance}</td>
                <td className="py-3 px-4 border border-gray-300">{user._id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewUsers;
