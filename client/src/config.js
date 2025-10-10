// src/config.js
export const API_BASE = "https://healthcare-backend-4sgw.onrender.com/api";

// Predefined endpoints (optional, for convenience)
export const ENDPOINTS = {
  appointments: `${API_BASE}/appointments`,
  clinics: `${API_BASE}/clinics`,
  doctors: `${API_BASE}/doctors`,
  healthlogs: `${API_BASE}/healthlogs`,
  prescriptions: `${API_BASE}/prescriptions`,
  symptomjournals: `${API_BASE}/symptomjournals`,
  signup: `${API_BASE}/signup`,
  login: `${API_BASE}/login`
};
