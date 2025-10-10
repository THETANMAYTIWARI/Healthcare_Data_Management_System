// api.js
import axios from "axios";
import { API_BASE } from "../config";

// List of all backend resources
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
endpoints.forEach((resource) => {
  api[resource] = async () => {
    try {
      const response = await axios.get(`${API_BASE}/${resource}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${resource}:`, error);
      throw error;
    }
  };
});

export default api;

