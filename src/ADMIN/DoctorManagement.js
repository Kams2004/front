// DoctorManagement.js
import React from 'react';
import './DoctorManagement.css'; // Import CSS specific to doctor management

const demoDoctors = [
  { id: 1, matricule: 'D001', name: 'John', surname: 'Doe', dob: '1985-06-15', phone: '123-456-7890', sex: 'Male', email: 'john.doe@example.com' },
  { id: 2, matricule: 'D002', name: 'Jane', surname: 'Smith', dob: '1990-02-20', phone: '987-654-3210', sex: 'Female', email: 'jane.smith@example.com' },
  { id: 3, matricule: 'D003', name: 'Emily', surname: 'Johnson', dob: '1982-11-30', phone: '456-789-0123', sex: 'Female', email: 'emily.johnson@example.com' },
];

const DoctorManagement = () => {
  return (
    <div className="doctor-management-container">
      <h3>Doctors</h3>
      <table className="table table-striped doctor-table">
        <thead>
          <tr>
            <th>Matricule</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Date of Birth</th>
            <th>Phone Number</th>
            <th>Sex</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {demoDoctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.matricule}</td>
              <td>{doctor.name}</td>
              <td>{doctor.surname}</td>
              <td>{doctor.dob}</td>
              <td>{doctor.phone}</td>
              <td>{doctor.sex}</td>
              <td>{doctor.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorManagement;
