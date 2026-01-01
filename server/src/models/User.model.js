import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  githubId: String,
  username: String,
  accessToken: String
});

export default mongoose.model("User", UserSchema);
