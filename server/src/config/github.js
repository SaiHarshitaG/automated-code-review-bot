import { Octokit } from "@octokit/rest";

export const getOctokit = (token) =>
  new Octokit({ auth: token });
