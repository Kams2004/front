// src/Components/Header/Header.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Header.css"; // CSS specific to the header

const Header = ({ isProfileComplete }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  
  // Number of notifications, e.g., profile update reminder
  const notificationCount = isProfileComplete ? 0 : 1;

  return (
    <header className="dashboard-header d-flex justify-content-between align-items-center p-3 shadow-sm">
      {/* PDMD Logo */}
      <div className="logo-container">
        <img src="pdmd.png" alt="PDMD Logo" className="dashboard-logo" />
      </div>

      {/* Search Bar - Centered */}
      <div className="d-flex form-control search-bar rounded-pill max-w">
        <i className="mr-5 bi bi-search"></i>
        <input
          type="text"
          className="border-0 ml-5 flex-grow-1"
          placeholder="Search"
        />
      </div>

      {/* Icons on the right */}
      <div className="icons-container d-flex align-items-center">
        {/* Account Icon */}
        <div className="icon icon-spacing">
          <i className="bi bi-person-circle"></i> {/* Account Icon */}
        </div>

        {/* Notification Icon */}
        <div
          className={`icon icon-spacing ${notificationCount > 0 ? "shake-icon" : ""}`} 
          onMouseEnter={() => setShowNotifications(true)}
          onMouseLeave={() => setShowNotifications(false)}
          style={{ position: 'relative' }} // Set relative positioning here
        >
          <i className="bi bi-bell"></i> {/* Notification Icon */}
          {notificationCount > 0 && (
            <span className="notification-count">{notificationCount}</span>
          )}
          {showNotifications && notificationCount > 0 && (
            <div className="popover-container notification-popover">
              <div className="popover-content">
                <p>You need to update your profile to access other sections.</p>
              </div>
            </div>
          )}
        </div>

        {/* Messaging Icon */}
        <div
          className="icon icon-spacing"
          onMouseEnter={() => setShowMessages(true)}
          onMouseLeave={() => setShowMessages(false)}
        >
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
        <div
          className="icon icon-spacing"
          onMouseEnter={() => setShowLanguageOptions(true)}
          onMouseLeave={() => setShowLanguageOptions(false)}
        >
          <i className="bi bi-translate shake-icon"></i>{" "}
          {/* Change Language Icon */}
          {showLanguageOptions && (
            <div className="language-dropdown popover-container">
              <p onClick={() => console.log("English selected")}>English</p>
              <p onClick={() => console.log("French selected")}>French</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
