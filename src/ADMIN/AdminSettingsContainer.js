import React, { useState } from 'react';
import './AdminSettingsContainer.css'; // Ensure to import the CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from './Avatar'; // Import the Avatar component

const AdminSettingsContainer = ({ onProfileComplete }) => {
  const [formData, setFormData] = useState({
    firstName: 'William',
    lastName: 'Smith',
    group: 'Admin Group',
    profilePhoto: 'admin-profile.jpeg', // No longer needed
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Admin Information:', formData);
    alert('Profile updated successfully!');
    if (onProfileComplete && typeof onProfileComplete === 'function') {
      onProfileComplete();
    } else {
      console.error('onProfileComplete is not a function');
    }
  };

  return (
    <div className="admin-settings-container">
      <h2 className="text-center">Admin Settings</h2>
      <div className="admin-settings-blue-line"></div>

      <form className="settings-form" onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center align-items-center">
          {/* Replace the image with Avatar */}
          <div className="admin-settings-profile-picture-section">
            <Avatar firstName={formData.firstName} lastName={formData.lastName} />
          </div>

          <div className="admin-settings-admin-buttons d-flex flex-column justify-content-around">
            <button type="button" className="btn btn-primary mb-2">
              Modify
            </button>
            <button type="button" className="btn btn-danger">
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>

        <div className="admin-settings-form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="admin-settings-form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="admin-settings-form-group">
          <label htmlFor="group">Group</label>
          <input
            type="text"
            className="form-control"
            id="group"
            name="group"
            value={formData.group}
            onChange={handleChange}
          />
        </div>

        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminSettingsContainer;
