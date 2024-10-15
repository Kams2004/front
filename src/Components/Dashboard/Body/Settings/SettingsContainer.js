import React, { useState } from 'react';
import './SettingsContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SettingsContainer = ({ onProfileComplete }) => {
  const [formData, setFormData] = useState({
    orderNumber: '12345',
    lastName: 'Doe',
    firstName: 'John',
    birthDate: '1985-07-22',
    birthPlace: 'New York',
    neighborhood: 'Brooklyn',
    nationality: 'American',
    idCard: 'AB123456',
    phoneId1: '+1',
    phoneNumber1: '555-1234',
    phoneId2: '',
    phoneNumber2: '',
    gender: 'Male',
    email: 'john.doe@example.com',
    specialty: 'Cardiology',
    profilePhoto: 'USER.jpeg',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Doctor Information:', formData);
    alert('Profile updated successfully!');
    if (onProfileComplete && typeof onProfileComplete === 'function') {
      onProfileComplete(); // Call the callback to mark the profile as complete
    } else {
      console.error('onProfileComplete is not a function');
    }
  };
  const handleReset = () => {
    setFormData({
      orderNumber: '12345',
      lastName: 'Doe',
      firstName: 'John',
      birthDate: '1985-07-22',
      birthPlace: 'New York',
      neighborhood: 'Brooklyn',
      nationality: 'American',
      idCard: 'AB123456',
      phoneId1: '+1',
      phoneNumber1: '555-1234',
      phoneId2: '',
      phoneNumber2: '',
      gender: 'Male',
      email: 'john.doe@example.com',
      specialty: 'Cardiology',
      profilePhoto: 'USER.jpeg',
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

          {/* Birth Place */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="birthPlace">Birth Place</label>
              <input
                type="text"
                className="form-control"
                id="birthPlace"
                name="birthPlace"
                value={formData.birthPlace}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Neighborhood */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="neighborhood">Neighborhood</label>
              <input
                type="text"
                className="form-control"
                id="neighborhood"
                name="neighborhood"
                value={formData.neighborhood}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Nationality */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="nationality">Nationality</label>
              <input
                type="text"
                className="form-control"
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* ID Card */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="idCard">ID Card/Passport</label>
              <input
                type="text"
                className="form-control"
                id="idCard"
                name="idCard"
                value={formData.idCard}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Phone Number 1 */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="phoneNumber1">Phone Number 1</label>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control mr-2 phoneid"
                  placeholder="Phone ID 1"
                  name="phoneId1"
           
                  value={formData.phoneId1}
                  onChange={handleChange}
                  // style="width:23%;"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number 1"
                  name="phoneNumber1"
                  value={formData.phoneNumber1}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Phone Number 2 */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="phoneNumber2">Phone Number 2</label>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control mr-2 phoneid"
                  placeholder="Phone ID 2"
                  name="phoneId2"
                  value={formData.phoneId2}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number 2"
                  name="phoneNumber2"
                  value={formData.phoneNumber2}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Gender */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <input
                type="text"
                className="form-control"
                id="gender"
                name="gender"
                value={formData.gender}
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

          {/* Specialty */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="specialty">Specialty</label>
              <input
                type="text"
                className="form-control"
                id="specialty"
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Profile Photo */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="profilePhoto">Profile Photo</label>
              <input
                type="file"
                className="form-control"
                id="profilePhoto"
                name="profilePhoto"
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
