import "./PullRequestCard.css";
import { useNavigate } from "react-router-dom";

export default function PullRequestCard({ pr, repo }) {
  const navigate = useNavigate();

  return (
    <div
      className="pr-card"
      onClick={() => navigate(`/reviews/${pr.id}`)}
    >
      <h3>{pr.title}</h3>
      <p>PR #{pr.number}</p>
      <span className="pr-status">Open</span>
    </div>
  );
}
