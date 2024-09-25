// GroupManagement.js
import React, { useState } from 'react';
import './GroupManagement.css'; // Import CSS specific to group management

const demoGroups = [
  { id: 1, name: 'Admins' },
  { id: 2, name: 'Editors' },
  { id: 3, name: 'Viewers' },
];

const GroupManagement = () => {
  const [groups, setGroups] = useState(demoGroups);
  const [newGroup, setNewGroup] = useState('');

  const handleAddGroup = () => {
    if (newGroup.trim()) {
      const newGroupItem = { id: groups.length + 1, name: newGroup };
      setGroups([...groups, newGroupItem]);
      setNewGroup(''); // Clear input field
    }
  };

  const handleDeleteGroup = (id) => {
    const updatedGroups = groups.filter(group => group.id !== id); // Remove the group by id
    setGroups(updatedGroups); // Update the state with the new group list
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
