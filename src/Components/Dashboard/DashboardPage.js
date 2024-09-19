import React from 'react';
import Header from './Header';
import Body from './Body';
import Sidebar from './SideBar/SideBar';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      {/* Full-width Header */}
      <Header />

      {/* Main Content */}
      <div className="dashboard-body">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Body content */}
        <Body />
      </div>
    </div>
  );
};

export default DashboardPage;
