import React, { useState } from 'react';
import Header from './Header';
import Body from './Body';
import Sidebar from './SideBar';

import './Dashboard.css';

const DashboardPage1 = () => {
  const [selectedComponent, setSelectedComponent] = useState('Dashboard'); // Default to 'Dashboard'

  const handleSidebarItemClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="dashboard-page">
      {/* Full-width Header */}
      <Header />

      {/* Main Content */}
      <div className="main-content">
        {/* Sidebar */}
        <Sidebar onItemClick={handleSidebarItemClick} />
        
        {/* Body content */}
        <div className="dashboard-body">
         <Body selectedComponent={selectedComponent} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage1;