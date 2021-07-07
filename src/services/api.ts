import axios from 'axios';
import { getToken } from './auth';

//export const API_URL = process.env.REACT_APP_API_URL;
export const API_URL = 'http://localhost:5002/api';

const api = axios.create({
  baseURL: API_URL
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
