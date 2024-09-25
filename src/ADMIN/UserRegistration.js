// UserRegistration.js
import React, { useState } from 'react';
import './UserRegistration.css'; // Import CSS for registration styling

const UserRegistration = ({ onRegister, onCancel }) => {
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    firstName: '',
    lastName: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser.password === newUser.confirmPassword) {
      onRegister(newUser); // Pass the new user data back to UserManagement
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="user-registration-container">
      <h4 className="text-center mb-4">Register User</h4>
      <form onSubmit={handleSubmit} className="container">
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              className="form-control rounded"
              name="username"
              placeholder="Username"
              value={newUser.username}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <input
              type="password"
              className="form-control rounded"
              name="password"
              placeholder="Password"
              value={newUser.password}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <input
              type="password"
              className="form-control rounded"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={newUser.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <input
              type="email"
              className="form-control rounded"
              name="email"
              placeholder="Email"
              value={newUser.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              className="form-control rounded"
              name="firstName"
              placeholder="First Name"
              value={newUser.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control rounded"
              name="lastName"
              placeholder="Last Name"
              value={newUser.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary rounded-pill me-2">
            Confirm
          </button>
          <button type="button" onClick={onCancel} className="btn btn-secondary rounded-pill">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserRegistration;
