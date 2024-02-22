// import { BASE_URL } from "@/constants";
// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: BASE_URL + "/api",
//   withCredentials: true,
//   // timeout: 1000,
//   // headers: {'X-Custom-Header': 'foobar'}
// });

// //export const setToken = (token) => {
// //  axiosInstance.defaults.headers.common = { Authorization: `Bearer ${token}` };
// //};
import axios from "axios";
import { BASE_URL } from "@/constants";

const BACKEND_URL = BASE_URL + "/api";

export const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const auth = localStorage.getItem("authToken");
    if (auth) {
      config.headers = {
        Authorization: `authorization ${auth}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    Promise.reject(error);
  }
);
