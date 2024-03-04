import axios from "axios";
import useEncryption from "../EncryptData/EncryptData";

// Encrypt & Decrypt

const instanceEnDe = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});
// eslint-disable-next-line consistent-return

instanceEnDe.interceptors.request.use(
  (config) => {
    const { decryptData } = useEncryption();
    const getdata = decryptData(localStorage.getItem("details"));

    if (getdata?.data?.token) {
      config.headers = {
        Authorization: getdata?.data?.token,
        Accept: "application/json",
        "Content-Type": "application/json",
        // "content-type": "multipart/form-data",
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
instanceEnDe.interceptors.response.use(
  (response) => response,
  (error) => {
    Promise.reject(error);
  }
);
export default instanceEnDe;