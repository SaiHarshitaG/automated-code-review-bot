import axios from "axios";

const BASE = "http://localhost:5000/api/auth";

export const loginWithGitHub = () =>
  window.location.href = `${BASE}/github`;

export const fetchUser = () =>
  axios.get(`${BASE}/me`, { withCredentials: true });
