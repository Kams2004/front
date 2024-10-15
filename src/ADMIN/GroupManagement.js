// GroupManagement.js
import React, { useEffect, useState } from 'react';
import './GroupManagement.css'; // Import CSS specific to group management
import config from '../config';
const GroupManagement = () => {
  const [groups, setGroups] = useState([]);
  const [newGroup, setNewGroup] = useState('');

  // Fetch groups from the backend on component mount
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch(`${config.baseURL}roles`);
        const data = await response.json();
        setGroups(data);
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };

    fetchGroups();
  }, []);

  const handleAddGroup = async () => {
    if (newGroup.trim()) {
      const newGroupItem = { name: newGroup };

      try {
        const response = await fetch(`${config.baseURL}/roles/add`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newGroupItem),
        });

        if (response.ok) {
          const createdGroup = await response.json();
          setGroups([...groups, createdGroup]);
          setNewGroup(''); // Clear input field
        } else {
          console.error('Failed to add group:', response.statusText);
        }
      } catch (error) {
        console.error('Error adding group:', error);
      }
    }
  };

  const handleDeleteGroup = async (id) => {
    try {
      const response = await fetch(`${config.baseURL}api/groups/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const updatedGroups = groups.filter(group => group.id !== id);
        setGroups(updatedGroups); // Update the state with the new group list
      } else {
        console.error('Failed to delete group:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting group:', error);
    }
  };

  return (
    <div className="group-management-container">
      <h3>Group Management</h3>
      <div className="add-group-container">
        <input
          type="text"
          value={newGroup}
          onChange={(e) => setNewGroup(e.target.value)}
          placeholder="Enter group name"
          className="group-input"
        />
        <button className="add-group-button" onClick={handleAddGroup}>Add Group</button>
      </div>
      <table className="table table-striped group-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Group Name</th>
            <th>Actions</th> {/* New Actions column */}
          </tr>
        </thead>
        <tbody>
          {groups.map((group, index) => (
            <tr key={group.id}>
              <td>{index + 1}</td>
              <td>{group.name}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm rounded-pill"
                  onClick={() => handleDeleteGroup(group.id)}
                >
                  &minus; {/* Unicode minus symbol */}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroupManagement;
