import React from 'react';
import './DoctorManagement.css'; // Import CSS specific to doctor management
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const demoDoctors = [
  { id: 1, matricule: 'D001', name: 'John', surname: 'Doe', dob: '1985-06-15', phone: '123-456-7890', sex: 'Male', email: 'john.doe@example.com', status: 'Complete' },
  { id: 2, matricule: 'D002', name: 'Jane', surname: 'Smith', dob: '1990-02-20', phone: '987-654-3210', sex: 'Female', email: 'jane.smith@example.com', status: 'Incomplete' },
  { id: 3, matricule: 'D003', name: 'Emily', surname: 'Johnson', dob: '1982-11-30', phone: '456-789-0123', sex: 'Female', email: 'emily.johnson@example.com', status: 'Pending' },
];

const getStatusButton = (status, t) => {
  switch (status) {
    case 'Complete':
      return (
        <button className="btn btn-success btn-sm rounded-pill animate__animated animate__fadeIn">
          {t('complete')}
        </button>
      );
    case 'Incomplete':
      return (
        <button className="btn btn-danger btn-sm rounded-pill animate__animated animate__fadeIn">
          {t('incomplete')}
        </button>
      );
    case 'Pending':
      return (
        <button className="btn btn-warning btn-sm rounded-pill animate__animated animate__fadeIn">
          {t('pending')}
        </button>
      );
    default:
      return null;
  }
};

const DoctorManagement = () => {
  const { t } = useTranslation(); // Use the translation hook

  return (
    <div className="doctor-management-container">
      <h3>{t('doctors')}</h3> {/* Translated title */}
      <table className="table table-striped doctor-table">
        <thead>
          <tr>
            <th>{t('matricule')}</th> {/* Translated table headers */}
            <th>{t('name')}</th>
            <th>{t('surname')}</th>
            <th>{t('dob')}</th>
            <th>{t('phoneNumber')}</th>
            <th>{t('sex')}</th>
            <th>{t('email')}</th>
            <th>{t('status')}</th> {/* Translated Status column */}
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
              <td>{getStatusButton(doctor.status, t)}</td> {/* Render status button */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorManagement;
