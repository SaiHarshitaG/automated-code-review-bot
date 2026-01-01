import mongoose from "mongoose";

const RepoSchema = new mongoose.Schema({
  repoName: String,
  owner: String,
  userId: mongoose.Schema.Types.ObjectId
});

export default mongoose.model("Repo", RepoSchema);
