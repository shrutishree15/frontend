import React, { useState } from 'react';
import Login from './components/LoginForm';
import Signup from './components/SignupForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ViewTree from './components/ViewTree';
import ViewUsers from './components/ViewUsers';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className=" bg-gradient-to-b from-blue-100 to-blue-200 min-h-screen">
      <Router>
        <Navbar />
        <div className='container'>
        <Routes>
  <Route exact path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
  <Route exact path="/signup" element={<Signup />} />
  <Route exact path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
  <Route exact path="/viewtree" element={isAuthenticated ? <ViewTree /> : <Navigate to="/" />} />
  <Route exact path="/viewuser" element={isAuthenticated ? <ViewUsers /> : <Navigate to="/" />} />
</Routes>

        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
