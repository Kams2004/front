import React, { useState } from 'react';
import'../Transaction/TransactionsList'; // Reuse existing styles or create new ones
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisteredPatients = () => {
  const initialPatients = [
    { id: 1, name: 'John Doe', transferDate: '2024-09-18', examination: 'Blood Test', commission: '$50' },
    { id: 2, name: 'Jane Smith', transferDate: '2024-09-17', examination: 'X-Ray', commission: '$75' },
    { id: 3, name: 'Mike Johnson', transferDate: '2024-09-16', examination: 'MRI', commission: '$100' },
    // Add more patient records as needed
  ];

  const [patients, setPatients] = useState(initialPatients);
  const [filterFields, setFilterFields] = useState({
    startDate: '',
    endDate: '',
  });

  const handleReset = () => {
    setFilterFields({
      startDate: '',
      endDate: '',
    });
    setPatients(initialPatients); // Reset the patients to initial state
  };

  return (
    <div className="transactions-list-container">
      <h2 className="text-center">Registered Patients</h2>
      <div className="blue-line"></div>
      
      <form className="transaction-filter-form">
        <div className="row">
          {/* Date Filtering */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="startDate">Start Date</label>
              <input 
                type="date" 
                className="form-control" 
                id="startDate" 
                value={filterFields.startDate}
                onChange={(e) => setFilterFields({ ...filterFields, startDate: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="endDate">End Date</label>
              <input 
                type="date" 
                className="form-control" 
                id="endDate" 
                value={filterFields.endDate}
                onChange={(e) => setFilterFields({ ...filterFields, endDate: e.target.value })}
              />
            </div>
          </div>
        </div>
      </form>

      <div className="form-buttons text-right">
        <button className="btn btn-primary rounded-pill" type="submit">Filter</button>
        <button 
          className="btn btn-secondary rounded-pill" 
          type="reset" 
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <div className="results-container">
        <h3>Showing {patients.length} Patients</h3>
        <table className="table table-hover table-bordered table-striped">
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Transfer Date</th>
              <th>Examination</th>
              <th>Commission</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.transferDate}</td>
                <td>{patient.examination}</td>
                <td>{patient.commission}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredPatients;
