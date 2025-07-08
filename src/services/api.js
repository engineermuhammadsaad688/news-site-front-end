// src/services/api.js
import axios from 'axios';

// Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_JWT_TOKEN}`,
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

// POST
export const postData = async (endpoint, data) => {
  const response = await axiosInstance.post(endpoint, data);
  return response.data;
};

// PUT
export const updateData = async (endpoint, id, data) => {
  const response = await axiosInstance.put(`${endpoint}/${id}`, data);
  return response.data;
};

// DELETE
export const deleteData = async (endpoint, id) => {
  const response = await axiosInstance.delete(`${endpoint}/${id}`);
  return response.data;
};
