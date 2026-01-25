import axios from 'axios';

// Create a specific instance for the Auth Service
const authApi = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default authApi;