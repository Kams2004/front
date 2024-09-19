import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

const LoginPage = () => {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to handle password visibility
  const navigate = useNavigate(); // For navigation

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    // Navigate to the dashboard route
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left side - Image */}
        <div className="image-container">
          <img src='pdmd.png' alt="Medical Center" className="baby-image" />
        </div>

        {/* Right side - Form */}
        <div className="form-container">
          <img src='pdmd.png' alt="App Logo" className="app-logo" />
          <h2>Welcome back!</h2>
          <p>Login as:</p>
          <div className="role-buttons">
            <button 
              onClick={() => setRole('Doctor')} 
              className={`role-button ${role === 'Doctor' ? 'active' : ''}`}
            >
              Doctor
            </button>
            <button 
              onClick={() => setRole('Patient')} 
              className={`role-button ${role === 'Patient' ? 'active' : ''}`}
            >
              Patient
            </button>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            {/* Username field with icon inside rounded input */}
            <div className="input-group mb-3 rounded-pill border">
              <span className="input-group-text border-0 bg-transparent">
                <i className="bi bi-person"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 rounded-pill"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Email field with icon (only visible if role is Patient) */}
            {role === 'Patient' && (
              <div className="input-group mb-3 rounded-pill border">
                <span className="input-group-text border-0 bg-transparent">
                  <i className="bi bi-envelope"></i>
                </span>
                <input
                  type="email"
                  className="form-control border-0 rounded-pill"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            )}

            {/* Password field with icon and eye toggle */}
            <div className="input-group mb-3 rounded-pill border">
              <span className="input-group-text border-0 bg-transparent">
                <i className="bi bi-lock"></i>
              </span>
              <input
                type={showPassword ? 'text' : 'password'}  // Toggles between 'password' and 'text' types
                className="form-control border-0 rounded-pill"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="input-group-text border-0 bg-transparent eye-icon" onClick={() => setShowPassword(!showPassword)}>
                <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i> {/* Switch icon based on state */}
              </span>
            </div>

            <div className="options d-flex justify-content-between align-items-center">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <a href="/forgot-password" className="forgot-password">Forgot password?</a>
            </div>

            <button type="submit" className="submit-button">Confirm</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
