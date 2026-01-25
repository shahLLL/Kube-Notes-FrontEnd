import axios from 'axios';

const notesApi = axios.create({
  baseURL: import.meta.env.VITE_NOTES_API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});


notesApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('notes_jwt');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default notesApi;