import axios from "axios";

const BASE = "http://localhost:5000/api/reviews";

export const getReviews = () => axios.get(BASE);
export const getReview = (id) => axios.get(`${BASE}/${id}`);
