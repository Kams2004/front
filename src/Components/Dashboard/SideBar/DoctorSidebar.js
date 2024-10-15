import React, { useState } from "react";
import "./DoctorSidebar.css"; // Ensure correct path

const DoctorSidebar = ({ onItemClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Handling window resize and load events
  window.addEventListener("resize", () =>
    window.innerWidth < 473 ? setIsExpanded(false) : setIsExpanded(true)
  );

  window.addEventListener("load", () =>
    window.innerWidth < 473 ? setIsExpanded(false) : ""
  );

  const handleMouseEnter = () =>
    window.innerWidth < 473 ? setIsExpanded(false) : setIsExpanded(true);

  const handleMouseLeave = () => setIsExpanded(false);

  return (
    <div
      className={`doctor-sidebar-containers ${isExpanded ? "doctor-expanded" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="doctor-sidebar doctor-warp">
        {/* <div className="doctor-logo-container doctor-block">
          <img src="pdmd.png" alt="PDMD Logo" className="doctor-sidebar-logo" />
        </div> */}

        <div className="doctor-user-container doctor-block">
          <img src="USER.jpeg" alt="User" className="doctor-user-profile" />
          {isExpanded && (
            <div className="doctor-user-info">
              <p>Hello, William</p>
              <small>william@gmail.com</small>
            </div>
          )}
        </div>

        <nav className="doctor-sidebar-nav">
          <ul>
            <li onClick={() => onItemClick("Dashboard")}>
              <i className="bi bi-house-door"></i>
              {isExpanded && <span>Dashboard</span>}
            </li>
            <li onClick={() => onItemClick("Patients")}>
              <i className="bi bi-person-lines-fill"></i>
              {isExpanded && <span>Registered Patients</span>}
            </li>
            <li onClick={() => onItemClick("Transactions")}>
              <i className="bi bi-file-earmark-text"></i>
              {isExpanded && <span>Transaction List</span>}
            </li>
            <li onClick={() => onItemClick("Examinations")}>
              <i className="bi bi-list-check"></i>
              {isExpanded && <span>Examinations List</span>}
            </li>
            {/* Add the Settings item */}
            <li onClick={() => onItemClick("Settings")}>
              <i className="bi bi-gear"></i>
              {isExpanded && <span>Settings</span>}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DoctorSidebar;
