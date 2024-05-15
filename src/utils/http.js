import axios from 'axios';
const axiosInstance = axios.create();
export const http = axiosInstance;
http.interceptors.response.use(res => res.data);
