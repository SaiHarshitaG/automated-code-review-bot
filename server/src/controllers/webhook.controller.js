import Review from "../models/Review.model.js";

export const handleWebhook = async (req, res) => {
  const pr = req.body.pull_request;
  if (!pr) return res.sendStatus(200);

  await Review.create({
    repo: pr.base.repo.full_name,
    prNumber: pr.number,
    summary: "AI review pending",
    status: "pending"
  });

  res.sendStatus(200);
};
