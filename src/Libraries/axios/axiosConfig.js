// First we need to import axios.js
import axios from 'axios';

const instance = axios.create();
instance.defaults.baseURL = 'http://localhost:3000';
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
instance.defaults.headers.post['Content-Type'] = 'application/json';
export default instance;

