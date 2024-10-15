import React, { useState, useEffect } from 'react';
import './UserRegistration.css'; // Import CSS for registration styling
import axios from 'axios'; // Import axios for making API calls
import config from '../config';

const UserRegistration = ({ onRegister, onCancel, user }) => {
  const [newUser, setNewUser] = useState({
    username: user ? user.username : '',
    password: '',
    confirmPassword: '',
    email: user ? user.email : '',
    first_name: user ? user.first_name : '',
    last_name: user ? user.last_name : '',
    roles: [], // Change roles to an array to support multiple roles
  });

  const [roles, setRoles] = useState([]); // Store fetched roles
  const [message, setMessage] = useState(''); // State to hold success/error messages

  useEffect(() => {
    if (user) {
      setNewUser({
        username: user.username,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        password: '', // Don't pre-fill password for security
        confirmPassword: '',
        roles: user.roles.map(role => role.name) // Store roles as an array
      });
    }
  }, [user]);

  useEffect(() => {
    // Fetch existing roles from the API on component mount
    const fetchRoles = async () => {
      try {
        const response = await axios.get(`${config.baseURL}/roles`);

        setRoles(response.data); // Set fetched roles in state
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    };
    fetchRoles();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleRoleChange = (roleName) => {
    setNewUser(prevUser => {
      const newRoles = prevUser.roles.includes(roleName)
        ? prevUser.roles.filter(role => role !== roleName) // Remove role if already selected
        : [...prevUser.roles, roleName]; // Add role if not selected
      return { ...prevUser, roles: newRoles };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newUser.password === newUser.confirmPassword) {
      try {
        // Prepare user data according to the specified format
        const userData = {
          username: newUser.username,
          email: newUser.email,
          first_name: newUser.first_name,
          last_name: newUser.last_name,
          password: newUser.password, // Include password for registration
          roles: newUser.roles // Send roles as an array
        };
  
        if (user) {
          // Update existing user
          await axios.put(`${config.baseURL}users/mod/${user.id}`, userData);
        } else {
          // Create new user
          await axios.post(`${config.baseURL}/signup`, userData);

        }
  
        // Show success message
        setMessage('User registration successful!');
        setTimeout(() => {
          setMessage(''); // Clear message after 5 seconds
        }, 5000);
  
        onRegister(); // Notify to refresh
      } catch (error) {
        // Handle errors and display message from the API if available
        if (error.response && error.response.data && error.response.data.message) {
          setMessage(error.response.data.message); // Display the error message from the API
        } else {
          setMessage('Registration failed. Please try again.'); // Set a generic error message
        }
      }
    } else {
      alert("Passwords do not match!");
    }
  };
  
  return (
    <div className="user-registration-container">
      <h4 className="text-center mb-4">{user ? 'Update User' : 'Register User'}</h4>
      {message && (
        <p className={`text-center ${message.includes('failed') || message.includes('exists') ? 'text-danger' : 'text-success'}`}>
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="container">
        {/* Username Field */}
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

        {/* First Name and Last Name Fields */}
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              className="form-control rounded"
              name="first_name"
              placeholder="First Name"
              value={newUser.first_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control rounded"
              name="last_name"
              placeholder="Last Name"
              value={newUser.last_name}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Password Fields */}
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

        {/* Email Field */}
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

        {/* Roles selection */}
        <div className="mb-3">
          <label className="form-label">Roles</label>
          {roles.map((role) => (
            <div key={role.id} className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={newUser.roles.includes(role.name)}
                onChange={() => handleRoleChange(role.name)} // Update roles on checkbox change
                id={`role-${role.id}`}
              />
              <label className="form-check-label" htmlFor={`role-${role.id}`}>
                {role.name}
              </label>
            </div>
          ))}
        </div>
        
        {/* Submit and Cancel buttons */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary rounded-pill me-2">
            {user ? 'Update User' : 'Confirm'}
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
