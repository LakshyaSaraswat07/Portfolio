import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '',
  headers: { 'Content-Type': 'application/json' },
});

export const sendContactMessage = (payload) => api.post('/api/contact', payload);
export default api;
