// LoginPage.js
import React, { useState } from 'react';
import EmailForm from './EmailForm';
import LoginForm from './LoginForm';
import SendRequestForm from './RequestForm'; // Import the SendRequestForm component
import './LoginPage.css';

const LoginPage = () => {
    const [currentForm, setCurrentForm] = useState('email'); // New state to manage which form is shown

    const handleEmailReceived = () => {
        setCurrentForm('login'); // Switch to login form when email is received
    };

    const handleShowRequestFormFromEmail = () => {
        setCurrentForm('request'); // Show request form from email
    };

    const handleShowRequestFormFromLogin = () => {
        setCurrentForm('request'); // Show request form from login
    };

    const handleBackToEmail = () => {
        setCurrentForm('email'); // Go back to email form
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="image-container">
                    <img src='/pdmd.png' alt="Medical Center" className="baby-image" />
                </div>
                <div className="form-container">
                    <img src='pdmd.png' alt="App Logo" className="app-logo" />
                    <h2>Welcome back!</h2>
                    {currentForm === 'email' && (
                        <EmailForm 
                            onEmailReceived={handleEmailReceived} 
                            onShowRequestForm={handleShowRequestFormFromEmail} 
                        />
                    )}
                    {currentForm === 'login' && (
                        <LoginForm 
                            onBack={handleBackToEmail} 
                            onShowRequestForm={handleShowRequestFormFromLogin} 
                        />
                    )}
                    {currentForm === 'request' && (
                        <SendRequestForm onCancel={handleBackToEmail} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
