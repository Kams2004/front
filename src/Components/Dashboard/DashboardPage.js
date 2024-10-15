// src/Components/Dashboard/DashboardPage.js
import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Body from './Body/Doctor-Body';
import Sidebar from './SideBar/DoctorSidebar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './DashboardPage.css';

const DashboardPage = () => {
  const [selectedComponent, setSelectedComponent] = useState('Dashboard'); // Default to 'Dashboard'
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [firstLogin] = useState(true);
  const [isProfileComplete, setIsProfileComplete] = useState(false);

  useEffect(() => {
    if (firstLogin) {
      setShowProfileModal(true);
    }
  }, [firstLogin]);

  const handleSidebarItemClick = (component) => {
    if (isProfileComplete || component === 'Settings') {
      setSelectedComponent(component);
    } else {
      alert('Please complete your profile before navigating to other sections.');
    }
  };

  const handleUpdateNow = () => {
    setShowProfileModal(false);
    setSelectedComponent('Settings');
  };

  const handleProfileComplete = () => {
    setIsProfileComplete(true);
  };

  return (
    <div className="dashboard-page">
      <Header isProfileComplete={isProfileComplete} />
      <div className="main-content">
        <Sidebar onItemClick={handleSidebarItemClick} />

        <div className="dashboard-body">
          <Body 
            selectedComponent={selectedComponent} 
            onProfileComplete={handleProfileComplete} // Pass the function here
          />
        </div>
      </div>

      <Modal show={showProfileModal} onHide={handleUpdateNow}>
        <Modal.Header closeButton>
          <Modal.Title>Complete Your Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          We noticed this is your first time logging in. You must update your profile before proceeding.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleUpdateNow}>
            Update Now
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DashboardPage;
