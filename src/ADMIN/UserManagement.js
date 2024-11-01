import React, { useEffect, useState, useCallback } from 'react';
import UserRegistration from './UserRegistration';
import axios from 'axios';
import './UserManagement.css';
import config from '../config';
import { useAuth } from '../AuthContext';

axios.defaults.withCredentials = true;

const UserManagement = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const { isConnected } = useAuth();

  const showMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => {
      setMessage(null);
      setMessageType(null);
    }, 3000);
  };

  const fetchUsers = useCallback(async () => {
    if (!isConnected) {
      showMessage('User is not connected. Please log in.', 'error');
      return;
    }
  
    try {
      const response = await axios.get(`${config.baseURL}users/all`, {
        withCredentials: true,
      });
      setUsers(response.data);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        showMessage('You need to log in to access this data.', 'error');
      } else {
        showMessage('Failed to fetch users. Please try again later.', 'error');
      }
      console.error('Error fetching users:', err);
    }
  }, [isConnected]);
  
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleRegister = async () => {
    setShowRegistration(false);
    setCurrentUser(null);
    await fetchUsers();
    showMessage('User registered successfully!', 'success');
  };

  const handleCancel = () => {
    setShowRegistration(false);
    setCurrentUser(null);
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    setShowRegistration(true);
  };

  const handleDelete = async (userId) => {
    if (!isConnected) {
      showMessage('User is not connected. Please log in.', 'error');
      return;
    }

    const confirmed = window.confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      try {
        const response = await axios.delete(`${config.baseURL}/users/del/${userId}`, {
          withCredentials: true,
        });

        if (response.status === 200) {
          const responseMessage = response.data.Message || 'User deleted successfully.';
          showMessage(responseMessage, 'success');
          await fetchUsers();
        } else {
          const errorMessage = response.data.Message || 'Failed to delete user.';
          showMessage(errorMessage, 'error');
        }
      } catch (err) {
        const errorMessage = err.response ? err.response.data.Message : err.message;
        showMessage(`Failed to delete user: ${errorMessage}`, 'error');
        console.error('Error deleting user:', err);
      }
    }
  };

  const totalItems = users.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const displayedUsers = users.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);
  const handleItemsPerPageChange = (e) => setItemsPerPage(Number(e.target.value));

  return (
    <div className="user-management-container">
      {message && (
        <p className={`message text-center ${messageType}`}>
          {message}
        </p>
      )}

      {showRegistration ? (
        <UserRegistration 
          onRegister={handleRegister} 
          onCancel={handleCancel} 
          user={currentUser}
        />
      ) : (
        <>
          <h3>User Management</h3>
          <button
            className="add-user-button btn btn-primary"
            onClick={() => {
              setCurrentUser(null);
              setShowRegistration(true);
            }} 
          >
            Add User
          </button>
          
          <div className="pagination-controls">
            <label>
              Items per page:
              <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </label>
          
          </div>

          <table className="table table-striped user-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Roles</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {displayedUsers.map((user, index) => (
                <tr key={user.id}>
                  <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td>{user.first_name} {user.last_name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.roles.length > 0 ? user.roles.map(role => role.name).join(', ') : 'No Roles'}
                  </td>
                  <td className="action-buttons">
                    <button
                      className="btn btn-warning btn-action rounded-pill"
                      onClick={() => handleEdit(user)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger btn-action rounded-pill"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="pagination-controls">
  <div className="pagination-buttons">
    {[...Array(totalPages)].map((_, i) => (
      <button
        key={i}
        className={`btn ${currentPage === i + 1 ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => handlePageChange(i + 1)}
      >
        {i + 1}
      </button>
    ))}
  </div>
  <div className="page-info">
    Page: {currentPage} of {totalPages}
  </div>
</div>

      
        </>
      )}
    </div>
  );
};



export default UserManagement;
