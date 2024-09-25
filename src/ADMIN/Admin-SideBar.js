import React, { useState, useEffect } from "react";
import "./Admin-SideBar.css"; // Ensure correct path

const Sidebar = ({ onItemClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Handle resizing and loading
  useEffect(() => {
    const handleResize = () => {
      setIsExpanded(window.innerWidth >= 473);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);

  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => setIsExpanded(false);

  const handleItemClick = (item) => {
    onItemClick(item);
  };
  return (
    <div
      className={`sidebar-containers ${isExpanded ? "expanded" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sidebar warp">
        <div className="logo-container block">
          <img src="pdmd.png" alt="PDMD Logo" className="sidebar-logo" />
        </div>

        <div className="user-container block">
          <img src="USER.jpeg" alt="User" className="user-profile" />
          {isExpanded && (
            <div className="user-info">
              <p>Hello, William</p>
              <small>william@gmail.com</small>
            </div>
          )}
        </div>

        <nav className="sidebar-nav">
          <ul>
          <li onClick={() => handleItemClick("Users")}>
          <i className="bi bi-person"></i>
          {isExpanded && <span>Users</span>}
        </li>
            <li onClick={() => onItemClick("Groups")}>
              <i className="bi bi-people"></i>
              {isExpanded && <span>Groups</span>}
            </li>
            <li onClick={() => onItemClick("Doctors")}>
              <i className="bi bi-person-fill"></i>
              {isExpanded && <span>Doctors</span>}
            </li>
            <li onClick={() => onItemClick("Requests")}>
              <i className="bi bi-file-earmark-text"></i>
              {isExpanded && <span>Requests</span>}
            </li>
            <li onClick={() => onItemClick("Patients")}>
              <i className="bi bi-person-lines-fill"></i>
              {isExpanded && <span>Registered Patients</span>}
            </li>
            <li onClick={() => onItemClick("Doctors/Prescriptions")}>
              <i className="bi bi-file-earmark-medical"></i>
              {isExpanded && <span>Doctors/Prescriptions</span>}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
