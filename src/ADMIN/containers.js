import React, { useState } from 'react';
import './Admin-body.css'; // Import the CSS styles


const initialRequests = [
  { id: 1, name: 'John Doe', email: 'johndoe@example.com', message: 'Need help with my account' },
  { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', message: 'Requesting a prescription refill' },
  { id: 3, name: 'Emily Johnson', email: 'emilyj@example.com', message: 'Inquiring about test results' },
];


export const SmallContainer1 = () => (
  <div className="small-container">
    <i className="bi bi-person-fill users-icon" />
    <div className="text-container"> {/* Add a container for text */}
      <h5 className="title">Users</h5>
      <p className="value">120</p>
    </div>
  </div>
);

export const SmallContainer2 = () => (
  <div className="small-container">
    <i className="bi bi-people-fill groups-icon" />
    <div className="text-container"> {/* Add a container for text */}
      <h5 className="title">Groups</h5>
      <p className="value">45</p>
    </div>
  </div>
);

export const SmallContainer3 = () => (
  <div className="small-container">
    <i className="bi bi-hospital-fill doctors-icon" />
    <div className="text-container"> {/* Add a container for text */}
      <h5 className="title">Doctors</h5>
      <p className="value">30</p>
    </div>
  </div>
);

export const SmallContainer4 = () => (
  <div className="small-container">
    <i className="bi bi-bell-fill requests-icon" />
    <div className="text-container"> {/* Add a container for text */}
      <h5 className="title">Requests</h5>
      <p className="value">15</p>
    </div>
  </div>
);

export const SmallContainer5 = () => (
  <div className="small-container small-container-5">
    <i className="bi bi-person-check-fill patients-icon" />
    <div className="text-container"> {/* Add a container for text */}
      <h5 className="title">Patients</h5>
      <p className="value">200</p>
    </div>
  </div>
);

export const SmallContainer6 = () => (
  <div className="small-container small-container-6">
    <i className="bi bi-file-earmark-medical-fill prescriptions-icon" />
    <div className="text-container"> {/* Add a container for text */}
      <h5 className="title">Prescriptions</h5>
      <p className="value">60</p>
    </div>
  </div>
);

export const LargeContainer1 = () => {
  const [requests, setRequests] = useState(initialRequests); // Manage state for requests

  // Function to handle deletion of a request
  const handleDecline = (id) => {
    setRequests((prevRequests) => prevRequests.filter((request) => request.id !== id));
  };

  return (
    <div className="wide-container">
      <h3>Recent Requests</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Actions</th> {/* Add Actions column */}
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={request.id}>
              <td>{index + 1}</td>
              <td>{request.name}</td>
              <td>{request.email}</td>
              <td>{request.message}</td>
              <td>
                <div className="action-buttons"> {/* Container for buttons */}
                  <button className="action-button validate-button">Validate</button>
                  <button className="action-button decline-button" onClick={() => handleDecline(request.id)}>
                    Decline
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
// Define the second large container for recent prescriptions
export const LargeContainer2 = () => {
  return (
    <div className="wide-container">
      <h3>Recent Prescriptions</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Patient Name</th>
            <th>Doctor Name</th>
            <th>Medication</th>
            <th>Dosage</th>
            <th>Date Prescribed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Dr. Smith</td>
            <td>Amoxicillin</td>
            <td>500mg</td>
            <td>2024-09-20</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>Dr. Johnson</td>
            <td>Lisinopril</td>
            <td>10mg</td>
            <td>2024-09-21</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Emily Johnson</td>
            <td>Dr. Brown</td>
            <td>Metformin</td>
            <td>850mg</td>
            <td>2024-09-22</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

