import axios from "axios";

export const api = axios.create({
  baseURL: "https://techtest.youapp.ai",
  headers: {
    "Content-Type": "application/json",
    "accept": "*/*",
  },
});
