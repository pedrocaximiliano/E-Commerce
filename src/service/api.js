import axios from 'axios';

const api = axios.create({
  baseURL: "https://jsonbox.io/box_f486e56d8b1637c82740/"
});

export default api;