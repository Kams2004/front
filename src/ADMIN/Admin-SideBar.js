import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import the translation hook
import "./Admin-SideBar.css"; // Ensure correct path

const Sidebar = ({ onItemClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation("admin"); // Use the 'admin' namespace for translations

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
        {/* User Profile Section */}
        <div className="user-container block">
          <img src="USER.jpeg" alt="User" className="user-profile" />
          {isExpanded && (
            <div className="user-info">
              <p>{t("helloUser", { name: "William" })}</p> {/* Translated text */}
              <small>william@gmail.com</small>
            </div>
          )}
        </div>

        {/* Navigation Section */}
        <nav className="sidebar-nav">
          <ul>
            <li onClick={() => handleItemClick("Users")}>
              <i className="bi bi-person"></i>
              {isExpanded && <span>{t("users")}</span>} {/* Translated text */}
            </li>
            <li onClick={() => onItemClick("Groups")}>
              <i className="bi bi-people"></i>
              {isExpanded && <span>{t("groups")}</span>} {/* Translated text */}
            </li>
            <li onClick={() => onItemClick("Doctors")}>
              <i className="bi bi-person-fill"></i>
              {isExpanded && <span>{t("doctors")}</span>} {/* Translated text */}
            </li>
            <li onClick={() => onItemClick("Requests")}>
              <i className="bi bi-file-earmark-text"></i>
              {isExpanded && <span>{t("requests")}</span>} {/* Translated text */}
            </li>
            <li onClick={() => onItemClick("Patients")}>
              <i className="bi bi-person-lines-fill"></i>
              {isExpanded && <span>{t("patients")}</span>} {/* Translated text */}
            </li>
            <li onClick={() => onItemClick("Doctors/Prescriptions")}>
              <i className="bi bi-file-earmark-medical"></i>
              {isExpanded && <span>{t("doctorsPrescriptions")}</span>} {/* Translated text */}
            </li>
            {/* Adding Settings Icon */}
            <li onClick={() => onItemClick("Settings")}>
              <i className="bi bi-gear"></i>
              {isExpanded && <span>{t("settings")}</span>} {/* Translated text */}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
