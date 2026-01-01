import express from "express";
import {
  getUserRepos,
  getRepoPullRequests
} from "../controllers/repo.controller.js";

const router = express.Router();

// Get all repositories for logged-in user
router.get("/", getUserRepos);

// Get PRs for a specific repository
router.get("/:repo/prs", getRepoPullRequests);

export default router;
