import axios from 'axios';
(axios as any).defaults.withCredentials = true;
const http = axios.create({
  baseURL: '/api',
  timeout: 6000,
  withCredentials: true,
});

export default http;
