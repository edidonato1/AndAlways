import axios from 'axios';


const baseURL = 'http://localhost:3000'; // configure API call

const api = axios.create({
  baseURL: baseURL
})

export default api;