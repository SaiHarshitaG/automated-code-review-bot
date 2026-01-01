import { useNavigate } from "react-router-dom";
import "./RepoCard.css";

export default function RepoCard({ repo }) {
  const navigate = useNavigate();

  return (
    <div
      className="repo-card"
      onClick={() => navigate(`/repos/${repo.full_name}/prs`)}
    >
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
    </div>
  );
}
