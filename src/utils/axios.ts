import axios from 'axios';

const env: string = process.env.NODE_ENV || 'development';
const host = env === 'production' ? 'http://ec2-15-164-50-90.ap-northeast-2.compute.amazonaws.com' : 'http://localhost:5000';

export default axios.create({
  baseURL: `${host}`,
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: "json",
  withCredentials: true
});
