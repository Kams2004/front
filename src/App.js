// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; // Import AuthProvider
import LoginPage from './Components/LoginPage/Loginpage.js';
import DashboardPage from './Components/Dashboard/DashboardPage';
import SignUpPage from './Components/SignUp/SignUpPage';
import DashboardPage1 from './ADMIN/Dashboard';
import PatientDashboard from './Patients/PatientDashboard';
import ProtectedRoute from './ProtectedRoute'; // Import ProtectedRoute
import 'bootstrap/dist/css/bootstrap.min.css';
import './axiosConfig'; // Import the Axios interceptor without assigning it to a variable

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/confirm/:token" element={<LoginPage />} /> {/* Confirmation Route */}
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route 
                        path="/admin" 
                        element={
                            <ProtectedRoute allowedRoles={['Admin']}>
                                <DashboardPage1 />
                            </ProtectedRoute>
                        } 
                    />
                    <Route 
                        path="/doctor" 
                        element={
                            <ProtectedRoute allowedRoles={['Doctors']}>
                                <DashboardPage />
                            </ProtectedRoute>
                        } 
                    />
                    <Route 
                        path="/patient" 
                        element={
                            <ProtectedRoute allowedRoles={['patient']}>
                                <PatientDashboard />
                            </ProtectedRoute>
                        } 
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
