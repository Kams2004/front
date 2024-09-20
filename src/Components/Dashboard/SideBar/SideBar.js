import React, { useState } from 'react';
import './SideBar.css'; // Ensure correct path


const Sidebar = ({ onItemClick }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleMouseEnter = () => setIsExpanded(true);
    const handleMouseLeave = () => setIsExpanded(false);

    return (
        <div
            className={`sidebar-container ${isExpanded ? 'expanded' : 'collapsed'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="sidebar">
                <div className="logo-container">
                    <img src="pdmd.png" alt="PDMD Logo" className="sidebar-logo" />
                </div>

                <div className="user-container">
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
                        <li onClick={() => onItemClick('Dashboard')}><i className="bi bi-house-door"></i>{isExpanded && <span>Dashboard</span>}</li>
                        <li onClick={() => onItemClick('Patients')}><i className="bi bi-person-lines-fill"></i>{isExpanded && <span>Registered Patients</span>}</li>
                        <li onClick={() => onItemClick('Transactions')}><i className="bi bi-file-earmark-text"></i>{isExpanded && <span>Transaction List</span>}</li>
                        <li onClick={() => onItemClick('Examinations')}><i className="bi bi-list-check"></i>{isExpanded && <span>Examinations List</span>}</li>
                        {/* <li onClick={() => onItemClick('Transfer')}><i className="bi bi-arrow-right-circle"></i>{isExpanded && <span>Transfer to Medical Center</span>}</li> */}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
