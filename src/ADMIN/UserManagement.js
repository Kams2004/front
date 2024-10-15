import React, { useEffect, useState } from 'react';
import UserRegistration from './UserRegistration'; // Import the registration component
import axios from 'axios'; // Import axios for API requests
import './UserManagement.css'; // Import CSS specific to user management
import config from '../config';

const UserManagement = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null); // State for current user being edited
  const [error, setError] = useState(null); // State for error messages

  // Fetch users from the backend API on component mount
  useEffect(() => {
    fetchUsers(); // Call fetchUsers to get user data
  }, []); // Run once on mount

  // Function to fetch users from the API
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('accessToken'); // Get the access token
      const response = await axios.get(`${config.baseURL}user/all`, {
        headers: {
          Authorization: `Bearer ${token}` // Set the authorization header
        }
      });
      setUsers(response.data); // Set the users state with fetched data
    } catch (err) {
      setError('Failed to fetch users. Please try again later.'); // Handle any errors
      console.error('Error fetching users:', err);
    }
  };

  const handleRegister = async () => {
    setShowRegistration(false); // Hide the registration form
    setCurrentUser(null); // Reset current user
    await fetchUsers(); // Refresh the user list after registration or update
  };

  const handleCancel = () => {
    setShowRegistration(false); // Hide the registration form
    setCurrentUser(null); // Reset current user
  };

  const handleEdit = (user) => {
    setCurrentUser(user); // Set the user to be edited
    setShowRegistration(true); // Show registration form
  };
  const handleDelete = async (userId) => {
    const confirmed = window.confirm('Are you sure you want to delete this user?');
    if (confirmed) {
        try {
            const token = localStorage.getItem('accessToken'); // Get the access token

            if (!token) {
                setError('Authorization token is missing. Please log in again.');
                return;
            }

            const response = await axios.delete(`${config.baseURL}users/del/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}` // Set the authorization header
                }
            });

            console.log('Delete Response:', response.data);
            await fetchUsers(); // Refresh the user list after deletion
        } catch (err) {
            setError(`Failed to delete user: ${err.response ? err.response.data.Message : err.message}`);
            console.error('Error deleting user:', err);
        }
    }
};


  return (
    <div className="user-management-container">
      {error && <p className="text-danger text-center">{error}</p>} {/* Display error message */}
      {showRegistration ? (
        <UserRegistration 
          onRegister={handleRegister} 
          onCancel={handleCancel} 
          user={currentUser} // Pass current user data to registration
        />
      ) : (
        <>
          <h3>User Management</h3>
          <button
            className="add-user-button btn btn-primary"
            onClick={() => {
              setCurrentUser(null); // Reset current user to null for new user registration
              setShowRegistration(true); // Show registration form
            }} 
          >
            Add User
          </button>
          <table className="table table-striped user-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Roles</th> {/* New Roles column */}
                <th>Actions</th> {/* New Actions column */}
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.first_name} {user.last_name}</td>
                  <td>{user.email}</td>
                  <td>
                    {/* Display roles, joining them with commas */}
                    {user.roles.length > 0 ? user.roles.map(role => role.name).join(', ') : 'No Roles'}
                  </td>
                  <td className="action-buttons"> {/* Added class for flexbox */}
                    <button
                      className="btn btn-warning btn-action rounded-pill"
                      onClick={() => handleEdit(user)} // Edit user
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger btn-action rounded-pill"
                      onClick={() => handleDelete(user.id)} // Delete user
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default UserManagement;
