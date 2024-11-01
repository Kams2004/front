import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../AuthContext';
import './LoginPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import config from '../../config';

const LoginForm = ({ onBack, onShowRequestForm }) => {
    const [role, setRole] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember_me, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const { login } = useAuth(); // Use the login function from AuthContext

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        if (!username || !password) {
            setError('Please fill in all fields.');
            return;
        }

        try {
            const response = await axios.post(
                `${config.baseURL}/user/login`,
                {
                    username,
                    password,
                    remember_me,
                },
                {
                    withCredentials: true,
                }
            );

            const responseData = response.data;

            if (response.status === 200) {
                if (responseData['Token '] && responseData.data) {
                    const accessToken = responseData['Token '];
                    const userRole = responseData.data.roles && responseData.data.roles.length > 0 ? responseData.data.roles[0].name : null;
                    const sessionId = responseData.sessionId; // Assuming the session ID is provided

                    if (accessToken && userRole) {
                        // Save user data to local storage
                        localStorage.setItem('accessToken', accessToken);
                        localStorage.setItem('userRole', userRole);
                        if (sessionId) {
                            localStorage.setItem('sessionId', sessionId);
                        }

                        // Login the user using the Auth context
                        login({ accessToken, role: userRole, sessionId });

                        // Redirect based on user's role
                        switch (userRole) {
                            case 'Admin':
                                navigate('/admin');
                                break;
                            case 'Doctors':
                                navigate('/doctor');
                                break;
                            case 'patient':
                                navigate('/patient');
                                break;
                            default:
                                setError('Role not recognized. Please contact support.');
                        }
                    } else {
                        setError('Login failed. Please check your credentials.');
                    }
                } else {
                    setError('Unexpected response structure. Please contact support.');
                }
            }
        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data.message || 'Login failed. Please check your credentials and try again.');
            } else {
                setError('Network error. Please try again later.');
            }
            console.error('Login error:', err);
        }
    };

    return (
        <div className="form-container">
            {error && <p className="text-danger">{error}</p>}

            <button
                className="back-button"
                onClick={onBack}
                style={{
                    background: 'none',
                    border: 'none',
                    color: '#007bff',
                    cursor: 'pointer',
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    fontSize: '20px'
                }}
            >
                <i className="bi bi-arrow-left"></i>
            </button>

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
                        required
                    />
                </div>

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
                        required
                    />
                    <span className="input-group-text border-0 bg-transparent eye-icon" onClick={() => setShowPassword(!showPassword)}>
                        <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                    </span>
                </div>

                <div className="options d-flex justify-content-between align-items-center">
                    <label className="remember-me">
                        <input
                            type="checkbox"
                            checked={remember_me}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        Remember me
                    </label>
                    <button type="button" className="forgot-password" onClick={onShowRequestForm}>
                        Forgot password?
                    </button>
                </div>

                <button type="submit" className="submit-button">Confirm</button>
            </form>
        </div>
    );
};

export default LoginForm;
