import axios from 'axios';
import { TOKEN_KEY } from 'src/constants';

const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (config.headers && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
