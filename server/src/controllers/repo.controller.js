import { fetchRepos, fetchPullRequests } from "../services/github.service.js";

// GET /api/repos
export const getUserRepos = async (req, res) => {
  try {
    // TEMP: mock GitHub token (replace with real OAuth later)
    const token = process.env.GITHUB_ACCESS_TOKEN;

    const repos = await fetchRepos(token);
    res.json(repos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch repositories" });
  }
};

// GET /api/repos/:repo/prs
export const getRepoPullRequests = async (req, res) => {
  try {
    const token = process.env.GITHUB_ACCESS_TOKEN;
    const { repo } = req.params;

    const prs = await fetchPullRequests(token, repo);
    res.json(prs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch pull requests" });
  }
};
