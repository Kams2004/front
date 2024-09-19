// src/Components/Header/Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Header.css'; // CSS specific to the header

const Header = () => {
  return (
    <header className="dashboard-header d-flex justify-content-between align-items-center p-3 shadow-sm">
      {/* PDMD Logo */}
      <div className="logo-container">
        <img src="pdmd.png" alt="PDMD Logo" className="dashboard-logo" />
      </div>

      {/* Search Bar - Centered */}
      <div className="search-bar-container flex-grow-1 mx-3">
        <div className="input-group rounded-pill border search-bar">
          <span className="input-group-text bg-transparent border-0">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control border-0 rounded-pill"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Icons on the right */}
      <div className="icons-container d-flex align-items-center">
        {/* Account Icon - Placed on the far right */}
        <div className="icon me-3">
          <i className="bi bi-person-circle"></i> {/* Account Icon */}
        </div>

        {/* Spaced-out Icons */}
        <div className="icon me-4">
          <i className="bi bi-bell"></i> {/* Notification Icon */}
        </div>
        <div className="icon me-4">
          <i className="bi bi-chat-dots"></i> {/* Messaging Icon */}
        </div>
        <div className="icon">
          <i className="bi bi-translate"></i> {/* Change Language Icon */}
        </div>
      </div>
    </header>
  );
};

export default Header;
