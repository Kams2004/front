import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../Transaction/TransactionsList'; // Reuse existing styles or create new ones

// Map of months with corresponding reference values for API requests
const monthReferences = {
  January: '01',
  February: '02',
  March: '03',
  April: '04',
  May: '05',
  June: '06',
  July: '07',
  August: '08',
  September: '09',
  October: '10',
  November: '11',
  December: '12'
};

const RegisteredPatients = () => {
  const [patients, setPatients] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(''); // State for selected month

  // Fetch all data from the API initially or when reset
  const fetchAllPatients = async () => {
    try {
      const response = await axios.get('http://65.21.73.170:2052/gnu_doctor/12/exams-patients');
      setPatients(response.data.data_patients); // Set the initial data received from API
    } catch (error) {
      console.error('Error fetching patients data:', error);
      alert('Failed to fetch patient data. Please try again later.');
    }
  };

  // Fetch filtered data based on selected month
  const fetchPatientsByMonth = async (monthRef) => {
    try {
      const response = await axios.get(`http://65.21.73.170:2052/gnu_doctor/12/results_by_month/${monthRef}`);
      setPatients(response.data.data_patients); // Set the filtered data
    } catch (error) {
      console.error('Error fetching filtered patients data:', error);
      alert('Failed to fetch filtered patient data. Please try again later.');
    }
  };

  // Load all data initially
  useEffect(() => {
    fetchAllPatients();
  }, []);

  // Handle filter button click
  const handleFilter = () => {
    if (selectedMonth) {
      const monthRef = monthReferences[selectedMonth];
      fetchPatientsByMonth(monthRef);
    } else {
      alert('Please select a month to filter.');
    }
  };

  // Handle reset button click
  const handleReset = () => {
    setSelectedMonth('');
    fetchAllPatients(); // Reload all data from the API
  };

  return (
    <div className="transactions-list-container">
      <h2 className="text-center">Registered Patients</h2>
      <div className="blue-line"></div>
      
      <form className="transaction-filter-form">
        <div className="row">
          {/* Month Selection */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="monthSelect">Month</label>
              <select
                className="form-control"
                id="monthSelect"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                <option value="">Select a Month</option>
                {Object.keys(monthReferences).map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </form>

      <div className="form-buttons text-right">
        <button className="btn btn-primary rounded-pill" type="button" onClick={handleFilter}>
          Filter
        </button>
        <button 
          className="btn btn-secondary rounded-pill" 
          type="reset" 
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <div className="results-container">
        <h3>Showing {Object.keys(patients).length} Patients</h3>
        <table className="table table-hover table-bordered table-striped">
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th>Patient Name</th>
              <th>Examination</th>
              <th>Cost</th>
              <th>Transfer Date</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(patients).map(([name, details], index) => (
              <tr key={index}>
                <td>{index + 1}</td> {/* ID numbering */}
                <td>{name}</td>
                <td>{details[0]}</td>
                <td>{details[1]}</td>
                <td>{details[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredPatients;
