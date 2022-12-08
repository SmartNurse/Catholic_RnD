import axios from 'axios';

const apiGateway = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'access-control-allow-origin': '*',
    'access-control-allow-credentials': true,
  },
});

export default apiGateway;
