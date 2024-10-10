import axios from "axios";

const url = "http://localhost:3001/api";

const instance = axios.create({
  baseURL: url,
  withCredentials: true,
});

export default instance;
