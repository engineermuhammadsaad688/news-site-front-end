import axios from 'axios';
import { getToken } from '../utils';

const BASE_URL = process.env.REACT_APP_BASE_URL;

// Create axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// 🔁 Always attach the latest token before each request
axiosInstance.interceptors.request.use((config) => {
  const token = getToken(); // ✅ fetch latest token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// GET all
export const getAll = async (endpoint) => {
  const response = await axiosInstance.get(endpoint);
  return response.data;
};

// GET one
export const getOne = async (endpoint, id) => {
  const response = await axiosInstance.get(`${endpoint}/${id}`);
  return response.data;
};

// POST (supports file upload)
export const postData = async (endpoint, data, options = {}) => {
  const isFile = options.file || false;

  const token = getToken();
  const headers = {
    Authorization: `Bearer ${token}`,
    ...(isFile ? {} : { 'Content-Type': 'application/json' }),
  };

  const response = await axios.post(`${BASE_URL}${endpoint}`, data, { headers });
  return response.data;
};

// PUT (supports file upload)
export const updateData = async (endpoint, id, data, options = {}) => {
  const isFile = options.file || false;

  const token = getToken();
  const headers = {
    Authorization: `Bearer ${token}`,
    ...(isFile ? {} : { 'Content-Type': 'application/json' }),
  };

  const response = await axios.put(`${BASE_URL}${endpoint}/${id}`, data, { headers });
  return response.data;
};

// DELETE
export const deleteData = async (endpoint, id) => {
  const response = await axiosInstance.delete(`${endpoint}/${id}`);
  return response.data;
};
