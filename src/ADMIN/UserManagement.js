// UserManagement.js
import React, { useState } from 'react';
import UserRegistration from './UserRegistration'; // Import the registration component
import './UserManagement.css'; // Import CSS specific to user management

const demoUsers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' },
];

const UserManagement = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [users, setUsers] = useState(demoUsers);

  const handleRegister = (newUser) => {
    // Add the new user to the user list
    setUsers([...users, { id: users.length + 1, ...newUser }]);
    setShowRegistration(false); // Hide the registration form
  };

  const handleCancel = () => {
    setShowRegistration(false); // Hide the registration form
  };

  return (
    <div className="user-management-container">
      {showRegistration ? (
        <UserRegistration onRegister={handleRegister} onCancel={handleCancel} />
      ) : (
        <>
          <h3>User Management</h3>
          <button
            className="add-user-button btn btn-primary"
            onClick={() => setShowRegistration(true)} // Show registration form
          >
            Add User
          </button>
          <table className="table table-striped user-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th> {/* New Actions column */}
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-action rounded-pill"
                      onClick={() => alert(`Update user with ID: ${user.id}`)} // Placeholder for update functionality
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger btn-action rounded-pill"
                      onClick={() => setUsers(users.filter(u => u.id !== user.id))} // Delete user
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
