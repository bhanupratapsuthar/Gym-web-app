import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = process.env.REACT_APP_API_URL;


export const httpClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

httpClient.interceptors.request.use(
    (config) => {
        // Retrieve token from cookies using js-cookie
        const token = Cookies.get("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error.response?.status;

        if (status === 401) {
            console.error("Unauthorized access. Please log in again.");
        } else {
            console.error("An error occurred:", error.message);
        }

        return Promise.reject(error);
    }
);
