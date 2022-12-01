import axios from 'axios';

const apiGateway = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});

export default apiGateway;
