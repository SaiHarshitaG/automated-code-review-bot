import { Octokit } from "@octokit/rest";

const getClient = (token) => {
  return new Octokit({
    auth: token
  });
};

export const fetchRepos = async (token) => {
  const octokit = getClient(token);

  const { data } = await octokit.repos.listForAuthenticatedUser();
  return data.map(repo => ({
    id: repo.id,
    name: repo.name,
    full_name: repo.full_name
  }));
};

export const fetchPullRequests = async (token, repo) => {
  const octokit = getClient(token);
  const [owner, repoName] = repo.split("/");

  const { data } = await octokit.pulls.list({
    owner,
    repo: repoName,
    state: "open"
  });

  return data.map(pr => ({
    id: pr.id,
    number: pr.number,
    title: pr.title
  }));
};
