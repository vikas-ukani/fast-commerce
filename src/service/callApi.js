

import axios from 'axios';

const callAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

// callAxios.defaults.headers.common['Authorization'] = 'Bearer ';
callAxios.defaults.headers.post['Content-Type'] = 'application/json';

export default callAxios;
