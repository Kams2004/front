import React, { useState } from 'react';
import './SettingsContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const SettingsContainer = ({ onProfileComplete }) => {
  const [formData, setFormData] = useState({
    orderNumber: '',
    lastName: '',
    firstName: '',
    birthDate: '',
    phoneNumber1: '',
    phoneNumber2: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if phone numbers are identical
    if (formData.phoneNumber1 === formData.phoneNumber2) {
      alert('The phone numbers must not be identical. Please enter different phone numbers.');
      return;
    }
  
    // Ensure required fields are filled
    const requiredFields = ['orderNumber', 'lastName', 'firstName', 'birthDate', 'phoneNumber1', 'email'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        alert(`Please fill in the ${field} field.`);
        return;
      }
    }
  
    // Prepare data for backend
    const doctorData = {
      DoctorNO: formData.orderNumber,
      DoctorName: formData.firstName,
      DoctorLastname: formData.lastName,
      DoctorDOB: formData.birthDate,
      DoctorPhone: formData.phoneNumber1,
      DoctorPhone2: formData.phoneNumber2,
      DoctorEmail: formData.email,
    };
  
    try {
      // Send POST request with credentials
      const response = await axios.post('http://65.21.73.170:2052/doctor/add', doctorData, {
        withCredentials: true
      });
      console.log('Response from server:', response.data);
      alert('Profile updated successfully!');
  
      if (onProfileComplete && typeof onProfileComplete === 'function') {
        onProfileComplete();
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      const errorMessage = error.response?.data?.message || 'Failed to update profile. Please try again.';
      alert(errorMessage);
    }
  };
  

  const handleReset = () => {
    setFormData({
      orderNumber: '',
      lastName: '',
      firstName: '',
      birthDate: '',
      phoneNumber1: '',
      phoneNumber2: '',
      email: '',
    });
  };

  return (
    <div className="settings-container">
      <h2 className="text-center">Doctor Settings</h2>
      <div className="blue-line"></div>

      <form className="settings-form" onSubmit={handleSubmit}>
        <div className="row">
          {/* Order Number */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="orderNumber">Order Number</label>
              <input
                type="text"
                className="form-control"
                id="orderNumber"
                name="orderNumber"
                value={formData.orderNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* First Name */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Birth Date */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="birthDate">Birth Date</label>
              <input
                type="date"
                className="form-control"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Phone Number 1 */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="phoneNumber1">Phone Number 1</label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber1"
                name="phoneNumber1"
                value={formData.phoneNumber1}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Phone Number 2 */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="phoneNumber2">Phone Number 2</label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber2"
                name="phoneNumber2"
                value={formData.phoneNumber2}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary">Update Profile</button>
          <button type="button" className="btn btn-secondary ml-2" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default SettingsContainer;
