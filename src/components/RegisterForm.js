import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
// registerform.js
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    referralCode: '',
    balance: ''
  });

  const { name, email, referralCode, balance } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmitRegister = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/register', formData);
      if (res && res.data) {
        console.log(res.data);
        toast.success("User registered successfully!");
      } else {
        toast.error('Invalid response from server');
      }
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
      toast.error('Failed to register user');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-xl font-semibold mb-4">Register User</h2>
      <form onSubmit={onSubmitRegister}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
            required
            className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
            className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Referral Code of your parent (optional)"
            name="referralCode"
            value={referralCode}
            onChange={onChange}
            className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Amount You Have"
            name="balance"
            value={balance}
            onChange={onChange}
            className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Register 
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
