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
  const [showPassword, setShowPassword] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false); // State for showing registration form
  const navigate = useNavigate(); // For navigation

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    navigate('/dashboard'); // Navigate to the dashboard route
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    // Handle registration request logic here
    console.log('Registration request sent:', { username, email });
    setShowRegistration(false); // Optionally reset after sending
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
          {!showRegistration ? (
            <>
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

                <div className="input-group mb-3 rounded-pill border">
                  <span className="input-group-text border-0 bg-transparent">
                    <i className="bi bi-lock"></i>
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control border-0 rounded-pill"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="input-group-text border-0 bg-transparent eye-icon" onClick={() => setShowPassword(!showPassword)}>
                    <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
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
                  <a href="/signup" className="forgot-password">Forgot password?</a>
                </div>

                <button type="submit" className="submit-button">Confirm</button>
              </form>

              {/* Registration demand link */}
              <div className="registration-demand mt-3">
                <p>
                  Any Issue ?, <span 
                    className="link-button" 
                    onClick={() => setShowRegistration(true)}
                  >send a demand</span>
                </p>
              </div>
            </>
          ) : (
            // Registration request form
            <form onSubmit={handleRegistration} className="registration-form">
              <h3>Request Registration</h3>
              <div className="input-group mb-3 rounded-pill border">
                <span className="input-group-text border-0 bg-transparent">
                  <i className="bi bi-person"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-0 rounded-pill"
                  placeholder="Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
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
              <div className="input-group mb-3 rounded border">
                <textarea
                  className="form-control message-field"
                  placeholder="Message"
                  rows="3"
                ></textarea>
              </div>
              <div className="d-flex justify-content-between">
    <button type="button" className="role-button" onClick={() => setShowRegistration(false)}>Cancel</button>
    <button type="submit" className="submit-button">Send Request</button>
</div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
