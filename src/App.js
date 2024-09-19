// src/App.js
// src/Components/Dashboard/DashboardPage.js
import React from 'react';
import Header from './Components/Dashboard/Header';
import Body from './Components/Dashboard/Body';
import Sidebar from './Components/Dashboard/SideBar/SideBar';
import './Components/Dashboard/DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      {/* Full-width Header */}
      <Header />

      {/* Main Content */}
      <div className="main-content">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Body content */}
        <div className="dashboard-body">
          <Body />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
