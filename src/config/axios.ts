import axios from "axios";

export const BASE_URL = "http://192.168.18.21:4000/api";

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
  },
});
