import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://etrolley.net/api/etrollymarket',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;