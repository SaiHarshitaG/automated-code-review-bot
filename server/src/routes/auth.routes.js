import express from "express";
import {
  githubLogin,
  githubCallback,
  getCurrentUser
} from "../controllers/auth.controller.js";

const router = express.Router();

// Start GitHub OAuth
router.get("/github", githubLogin);

// GitHub OAuth callback
router.get("/github/callback", githubCallback);

// Get logged-in user
router.get("/me", getCurrentUser);

export default router;
