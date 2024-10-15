// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18n'; // Add this line to include i18n configuration
import './axiosConfig'; // Import the Axios interceptor without assigning it to a variable

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
