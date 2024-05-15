import axios from 'axios';
var axiosInstance = axios.create();
export var http = axiosInstance;
http.interceptors.response.use(function (res) { return res.data; });
