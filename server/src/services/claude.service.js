import { callClaude } from "../config/claude.js";

export const reviewWithAI = async (diff) => {
  return await callClaude(diff);
};
