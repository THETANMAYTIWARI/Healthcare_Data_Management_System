import axios from "axios";
import { API_BASE } from "./config";

// Utility object for all backend resources
const endpoints = [
  "appointments",
  "clinics",
  "doctors",
  "healthlogs",
  "prescriptions",
  "symptomjournals"
];

const api = {};

// Dynamically create methods for each endpoint
endpoints.forEach((res) => {
  api[res] = () => axios.get(`${API_BASE}/${res}`);
});

export default api;
