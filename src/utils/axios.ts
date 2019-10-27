import axios from 'axios';

const env: string = process.env.NODE_ENV || 'development';
const host = env === 'production' ? '' : 'http://localhost:5000';

export default axios.create({
  baseURL: `${host}`,
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: "json",
});
