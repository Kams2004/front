// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage/Loginpage';
import DashboardPage from './Components/Dashboard/DashboardPage'; // Import the DashboardPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />        {/* Login Page Route */}
        <Route path="/dashboard" element={<DashboardPage />} /> {/* Dashboard Route */}
      </Routes>
    </Router>
  );
}

export default App;