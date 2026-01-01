import mongoose from "mongoose";

export default mongoose.model(
  "Review",
  new mongoose.Schema({
    repo: String,
    prNumber: Number,
    summary: String,
    status: String
  }, { timestamps: true })
);
