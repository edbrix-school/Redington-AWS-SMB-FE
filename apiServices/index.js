import { clearAllCookies } from "services/utils/common";
import axios from "axios";
import { toast } from "react-toastify";

const AUTH_API_URL = process.env.NEXT_PUBLIC_BASE_AUTH_URL;
const fetchApi = axios.create({
  baseURL: AUTH_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

fetchApi.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return error;
  }
);

fetchApi.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  async (error) => {
    const originalRequest = error.config;
      if (
        error.response &&
        error.response.status === 401 &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
    
      }
      if(error.response.data.code ==401){
        toast.error("Session Expired", { autoClose: "3000" })
        localStorage.clear();
        clearAllCookies()
        window.location.href = "/";
      }

      if (error.response && error.response.status == 401) {
        localStorage.clear();
        clearAllCookies()
        window.location.href = "/";
        return undefined;
      }

    return error?.response?.data ?? error;
  }
);


export { fetchApi };

