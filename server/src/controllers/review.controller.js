import Review from "../models/Review.model.js";

export const getReviews = async (_, res) =>
  res.json(await Review.find());
