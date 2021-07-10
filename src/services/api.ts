import axios from 'axios';
import { getToken } from './auth';
import { message } from 'antd';

const protocol: string = window.location.protocol;
const hostname: string = window.location.hostname;
const apiPort: string = '5002'
const apiBase: string = '/api'

export const API_URL: string = protocol +'//' + hostname + ':' + apiPort + apiBase;

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

api.interceptors.response.use((response) => {
  if (response) {
    return response.data;
  }
  else {
    message.error('Não foi possível comunicar com o servidor');
  }
}, (error) => {
  if (error.response === undefined) {
    return null;
  }
  else if (error.response.status === 401) {
    try {
      const data = JSON.parse(error.response.data);
      message.error(data.message);
    }
    catch {
      message.error('Não autorizado');
    }
    return null;
  }
  else if (error.response.status === 400) {
    try {
      const data = JSON.parse(error.response.data);
      message.error(data.message);
    }
    catch {
      message.error('O servidor não pôde entender sua requisição');
    }
    return null;
  }
  else if (error.response.status === 500) {
    try {
      const data = JSON.parse(error.response.data);
      message.error(data.message);
    }
    catch {
      message.error('Erro interno do servidor');
    }
    return null;
  }
  return Promise.reject(error);
});

export default api;
