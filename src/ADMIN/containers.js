import React, { useEffect, useState, useCallback } from 'react';

import { useTranslation } from 'react-i18next'; // Import translation hook
import './Admin-body.css'; // Import the CSS styles
import axios from 'axios';

const initialRequests = [
  { id: 1, name: 'John Doe', email: 'johndoe@example.com', message: 'Need help with my account' },
  { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', message: 'Requesting a prescription refill' },
  { id: 3, name: 'Emily Johnson', email: 'emilyj@example.com', message: 'Inquiring about test results' },
];

export const SmallContainer1 = () => {
  const [userCount, setUserCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { t } = useTranslation('admin');

  const fetchUserCount = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/users');
      setUserCount(response.data.length);
    } catch (err) {
      setError(t('errorFetchingUserCount'));
      console.error('Error fetching user count:', err);
    } finally {
      setLoading(false);
    }
  }, [t]);

  return (
    <div className="small-container">
      <i className="bi bi-person-fill users-icon" />
      <div className="text-container">
        <h5 className="title">{t('users')}</h5> {/* Translated text */}
        {error ? (
          <p className="value text-danger">{error}</p>
        ) : (
          <p className="value">{userCount}</p>
        )}
      </div>
      <div
  className={`loading-icon ${loading ? 'loading' : ''}`}
  onClick={fetchUserCount}
  title={t('reloadUserCount')} // Translated tooltip can be noted here outside JSX
>
  {loading ? (
    <i className="bi bi-arrow-clockwise spinner-icon" />
  ) : (
    <i className="bi bi-arrow-clockwise" />
  )}
</div>

    </div>
  );
};

export const SmallContainer2 = () => {
  const [groupCount, setGroupCount] = useState(0);
  const { t } = useTranslation('admin'); // Translation hook

  useEffect(() => {
    const fetchGroupCount = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/groups');
        setGroupCount(response.data.length);
      } catch (error) {
        console.error('Error fetching group count:', error);
      }
    };

    fetchGroupCount();
  }, []);

  return (
    <div className="small-container">
      <i className="bi bi-people-fill groups-icon" />
      <div className="text-container">
        <h5 className="title">{t('groups')}</h5> {/* Translated text */}
        <p className="value">{groupCount}</p>
      </div>
    </div>
  );
};

export const SmallContainer3 = () => {
  const { t } = useTranslation('admin'); // Translation hook
  return (
    <div className="small-container">
      <i className="bi bi-hospital-fill doctors-icon" />
      <div className="text-container">
        <h5 className="title">{t('doctors')}</h5> {/* Translated text */}
        <p className="value">30</p>
      </div>
    </div>
  );
};

export const SmallContainer4 = () => {
  const { t } = useTranslation('admin'); // Translation hook
  return (
    <div className="small-container">
      <i className="bi bi-bell-fill requests-icon" />
      <div className="text-container">
        <h5 className="title">{t('requests')}</h5> {/* Translated text */}
        <p className="value">15</p>
      </div>
    </div>
  );
};

export const SmallContainer5 = () => {
  const { t } = useTranslation('admin'); // Translation hook
  return (
    <div className="small-container small-container-5">
      <i className="bi bi-person-check-fill patients-icon" />
      <div className="text-container">
        <h5 className="title">{t('patients')}</h5> {/* Translated text */}
        <p className="value">200</p>
      </div>
    </div>
  );
};

export const SmallContainer6 = () => {
  const { t } = useTranslation('admin'); // Translation hook
  return (
    <div className="small-container small-container-6">
      <i className="bi bi-file-earmark-medical-fill prescriptions-icon" />
      <div className="text-container">
        <h5 className="title">{t('prescriptions')}</h5> {/* Translated text */}
        <p className="value">60</p>
      </div>
    </div>
  );
};

export const LargeContainer1 = () => {
  const [requests, setRequests] = useState(initialRequests);
  const { t } = useTranslation('admin'); // Translation hook

  const handleDecline = (id) => {
    setRequests((prevRequests) => prevRequests.filter((request) => request.id !== id));
  };

  return (
    <div className="wide-container">
      <h3>{t('recentRequests')}</h3> {/* Translated text */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>{t('no')}</th> {/* Translated table headers */}
            <th>{t('name')}</th>
            <th>{t('email')}</th>
            <th>{t('message')}</th>
            <th>{t('actions')}</th> {/* Translated actions column */}
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
                <div className="action-buttons">
                  <button className="action-button validate-button">{t('validate')}</button>
                  <button className="action-button decline-button" onClick={() => handleDecline(request.id)}>
                    {t('decline')}
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

export const LargeContainer2 = () => {
  const { t } = useTranslation('admin'); // Translation hook
  return (
    <div className="wide-container">
      <h3>{t('recentPrescriptions')}</h3> {/* Translated text */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>{t('no')}</th> {/* Translated table headers */}
            <th>{t('patientName')}</th>
            <th>{t('doctorName')}</th>
            <th>{t('medication')}</th>
            <th>{t('dosage')}</th>
            <th>{t('datePrescribed')}</th>
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
