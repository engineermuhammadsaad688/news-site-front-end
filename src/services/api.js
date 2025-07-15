import axios from 'axios';
import { getToken } from '../utils';

const BASE_URL = process.env.REACT_APP_BASE_URL;

// ✅ Create axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// ✅ Attach token on every request
axiosInstance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ✅ Global error handling (optional)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Example: handle 401 Unauthorized globally
    if (error.response?.status === 401) {
      console.warn('Unauthorized. You may need to log in again.');
      // e.g., logoutUser(); navigate('/login');
    }
    console.log('called',error)
    return Promise.reject(error); // Forward error to .catch()
  }
);

// ✅ GET all (with optional query params)
export const getAll = async (endpoint, params = {}) => {
  const response = await axiosInstance.get(endpoint, { params });
  return response.data;
};

// ✅ GET one by ID
export const getOne = async (endpoint, id) => {
  const response = await axiosInstance.get(`${endpoint}/${id}`);
  return response.data;
};

// ✅ POST (supports JSON or file via FormData)
export const postData = async (endpoint, data, options = {}) => {
  const isFile = options.file || false;

  const headers = isFile
    ? {} // Let browser set multipart/form-data
    : { 'Content-Type': 'application/json' };

  const response = await axiosInstance.post(endpoint, data, { headers });
  return response.data;
};

// ✅ PUT (supports JSON or file)
export const updateData = async (endpoint, id, data, options = {}) => {
  const isFile = options.file || false;

  const headers = isFile
    ? {}
    : { 'Content-Type': 'application/json' };

  const response = await axiosInstance.put(`${endpoint}/${id}`, data, { headers });
  return response.data;
};

// ✅ DELETE by ID
export const deleteData = async (endpoint, id) => {
  const response = await axiosInstance.delete(`${endpoint}/${id}`);
  return response.data;
};

// ✅ PATCH (optional)
export const patchData = async (endpoint, id, data) => {
  const response = await axiosInstance.patch(`${endpoint}/${id}`, data);
  return response.data;
};
