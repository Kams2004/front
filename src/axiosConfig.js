// src/axiosConfig.js
import axios from 'axios';

// Set up the interceptor
axios.interceptors.request.use(
  (config) => {
    // Get the access token from localStorage
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Attach the token to the headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
