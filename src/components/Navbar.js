// Navbar.js

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleRegister =() =>{
    navigate("/dashboard");
  }
  let location = useLocation();

  return (
    <nav className="bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
          <Link
                  to="/"
                  className={`text-white ${
                    location.pathname === "/" ? "font-bold" : ""
                  }`}
                >
                  Home
                </Link>
          </div>
          <div className="flex items-center">
            <ul className="flex space-x-4">
             
            </ul>
            {!localStorage.getItem("token") ? (
              <div className="flex ml-4">
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-sm font-medium text-black bg-white hover:bg-blue-600"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="ml-2 px-3 py-2 rounded-md text-sm font-medium text-black bg-white  hover:bg-blue-600"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div>

              <button onClick={handleRegister}
              className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-black bg-white hover:bg-blue-700"
              >
Register
              </button>
              <button
                onClick={handleLogout}
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-black bg-white hover:bg-blue-700"
              >
                Logout
              </button>
</div>
              
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
