import axios from "axios";

export const BASE_URL = "http://localhost:8080";

export const AXIOS = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: {
        Authorization: "Basic dXNlcjpwYXNzd29yZA=="
    }
});