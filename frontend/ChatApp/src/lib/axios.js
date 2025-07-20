// axios instance configuration for the chat application
// This file sets up the axios instance with the base URL and credentials for API requests.
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:3001/api" : "/api",
    withCredentials: true,
});