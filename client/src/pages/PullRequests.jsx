import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import useFetch from "../hooks/useFetch";
import { fetchPRs } from "../api/repo.api";
import PullRequestCard from "../components/PullRequestCard";
import "./PullRequests.css";

export default function PullRequests() {
  const { repo } = useParams();
  const prs = useFetch(() => fetchPRs(repo));

  return (
    <>
      <Navbar />
      <main className="page">
        <h1>Pull Requests</h1>
        <p className="muted">{repo}</p>

        <div className="grid">
          {prs.length === 0 && <p>No open pull requests.</p>}
          {prs.map(pr => (
            <PullRequestCard key={pr.id} pr={pr} repo={repo} />
          ))}
        </div>
      </main>
    </>
  );
}
