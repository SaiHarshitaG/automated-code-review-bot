import axios from "axios";

const BASE = "http://localhost:5000/api/repos";

export const fetchRepos = () => axios.get(BASE);
export const fetchPRs = (repo) => axios.get(`${BASE}/${repo}/prs`);
