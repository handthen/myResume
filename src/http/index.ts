import axios from 'axios';

const http = axios.create({
  timeout: 6000,
  withCredentials: true,
});

export default http;
