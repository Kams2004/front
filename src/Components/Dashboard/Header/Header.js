// src/Components/Header/Header.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Header.css'; // CSS specific to the header

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  return (
    <header className="dashboard-header d-flex justify-content-between align-items-center p-3 shadow-sm">
      {/* PDMD Logo */}
      <div className="logo-container">
        <img src="pdmd.png" alt="PDMD Logo" className="dashboard-logo" />
      </div>

      {/* Search Bar - Centered */}
      <div className="search-bar-container flex-grow-1 mx-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control search-bar rounded-pill"
            placeholder="Search"
          />
          <span className="search-icon">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>

      {/* Icons on the right */}
      <div className="icons-container d-flex align-items-center">
        {/* Account Icon */}
        <div className="icon icon-spacing">
          <i className="bi bi-person-circle"></i> {/* Account Icon */}
        </div>

        {/* Notification Icon */}
        <div className="icon icon-spacing" 
             onMouseEnter={() => setShowNotifications(true)} 
             onMouseLeave={() => setShowNotifications(false)}>
          <i className="bi bi-bell shake-icon"></i> {/* Notification Icon */}
          {showNotifications && (
            <div className="popover-container">
              <div className="popover-content">
                <p>No notifications</p>
              </div>
            </div>
          )}
        </div>

        {/* Messaging Icon */}
        <div className="icon icon-spacing" 
             onMouseEnter={() => setShowMessages(true)} 
             onMouseLeave={() => setShowMessages(false)}>
          <i className="bi bi-chat-dots shake-icon"></i> {/* Messaging Icon */}
          {showMessages && (
            <div className="popover-container">
              <div className="popover-content">
                <p>No messages</p>
              </div>
            </div>
          )}
        </div>

        {/* Language Icon */}
        <div className="icon icon-spacing" 
             onMouseEnter={() => setShowLanguageOptions(true)} 
             onMouseLeave={() => setShowLanguageOptions(false)}>
          <i className="bi bi-translate shake-icon"></i> {/* Change Language Icon */}
          {showLanguageOptions && (
            <div className="language-dropdown popover-container">
              <p onClick={() => console.log('English selected')}>English</p>
              <p onClick={() => console.log('French selected')}>French</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
