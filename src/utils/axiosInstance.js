const axios = require('axios');

// Create an Axios instance with a base URL (optional)
const instance = axios.create({
  baseURL: 'http://localhost:4000',
});

// Request Interceptor
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    config.headers['Authorization'] = `Bearer ${token}`;    
    // You can add headers, perform authentication, or logging here
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Response Interceptor
instance.interceptors.response.use(
  (response) => {
    // Modify the response data before it is returned
    // You can handle common response data processing here
    return response;
  },
  (error) => {
    // Handle response errors
    return Promise.reject(error);
  }
);

export default instance;
