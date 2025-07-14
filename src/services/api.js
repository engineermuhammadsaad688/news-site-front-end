import axios from 'axios';
import { getToken } from '../utils';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const JWT_TOKEN = getToken();;

// Axios instance (optional for GET requests)
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${JWT_TOKEN}`,
  },
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

  const headers = {
    Authorization: `Bearer ${JWT_TOKEN}`,
    ...(isFile ? {} : { 'Content-Type': 'application/json' }),
  };

  const response = await axios.post(`${BASE_URL}${endpoint}`, data, { headers });
  return response.data;
};

// PUT (supports file upload)
export const updateData = async (endpoint, id, data, options = {}) => {
  const isFile = options.file || false;

  const headers = {
    Authorization: `Bearer ${JWT_TOKEN}`,
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
