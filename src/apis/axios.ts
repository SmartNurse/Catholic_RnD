import axios from 'axios';

const apiGateway = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': process.env.REACT_APP_BASE_URL,
  },
});

export default apiGateway;
