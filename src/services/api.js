import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.14:19008'
});

export default api;