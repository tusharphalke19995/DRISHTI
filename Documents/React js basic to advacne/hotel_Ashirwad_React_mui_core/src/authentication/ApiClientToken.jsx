import axios from 'axios';

const authToken = sessionStorage.getItem('access-token');
const axiosInstanceToken = axios.create({
    baseURL: "http://localhost:8976/",
  timeout: 5000,
  headers: {
    'Content-Type': 'multipart/form-data',
  'Content-Security-Policy': "script-src 'self' 'unsafe-eval'"
  },
});

axiosInstanceToken.interceptors.request.use((config) => {
  config.headers['Authorization'] = `Bearer ${authToken}`;
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstanceToken;