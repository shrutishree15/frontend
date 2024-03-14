import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
// signupform.js
const SignUpForm = ({setIsAuthenticated}) => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const { name, email, password, cpassword } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== cpassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        toast.success('Sign up successful!');
        navigate("/Dashboard");
        setIsAuthenticated(true);
      } else {
        toast.error(data.message || 'Sign up failed');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-40 p-6 bg-white rounded-lg shadow-xl mb-28">
      <h2 className="text-xl font-semibold mb-4">Create an account</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Your name"
            required
            className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Your email address"
            required
            className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Your password"
            minLength="8"
            required
            className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="cpassword"
            value={cpassword}
            onChange={onChange}
            placeholder="Repeat your password"
            minLength="8"
            required
            className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
