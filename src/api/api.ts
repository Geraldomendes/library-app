import axios from "axios";

export const api = axios.create({
  baseURL: "http://10.3.22.81:3000",
});
