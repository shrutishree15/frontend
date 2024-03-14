import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import RegisterForm from './RegisterForm';
import ViewUsers from './ViewUsers';
import ViewTree from './ViewTree';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [showViewUsers, setShowViewUsers] = useState(false);
  const [showViewTree, setShowViewTree] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  const toggleViewUsers = () => {
    setShowViewUsers(!showViewUsers);
    toast.success("You have registered Successfully");
  };

  const toggleViewTree = () => {
    setShowViewTree(!showViewTree);
    toast.success("You have registered Successfully");
  };

  // Function to navigate to ViewTree component
  const navigateToViewTree = () => {
    setShowViewUsers(false);
    setShowViewTree(true);
    navigate('/viewtree'); // Navigate to /viewtree route
  };

  // Function to navigate to ViewUsers component
  const navigateToViewUsers = () => {
    setShowViewTree(false);
    setShowViewUsers(true);
    navigate('/viewuser'); // Navigate to /viewuser route
  };

  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-200 min-h-screen">
      <main className="container mx-auto py-8">
        {showViewUsers ? (
          <ViewUsers />
        ) : showViewTree ? (
          <ViewTree />
        ) : (
          <div className="max-w-md mx-auto">
            <RegisterForm />
            <div className="text-center mt-4">
              <button onClick={navigateToViewUsers} className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2">
                View Users
              </button>
              <button onClick={navigateToViewTree} className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                View Tree
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
