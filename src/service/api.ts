import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

// api.defaults.headers.common['Authorization'] = 'Bearer ';
api.defaults.headers.post["Content-Type"] = "application/json";

export default api;
