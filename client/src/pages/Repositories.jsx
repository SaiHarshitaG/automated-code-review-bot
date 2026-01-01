import Navbar from "../components/Navbar";
import RepoCard from "../components/RepoCard";
import useFetch from "../hooks/useFetch";
import { fetchRepos } from "../api/repo.api";
import "./Repositories.css";

export default function Repositories() {
  const repos = useFetch(fetchRepos);

  return (
    <>
      <Navbar />
      <main className="page">
        <h1>Your Repositories</h1>
        <div className="grid">
          {repos.map(r => (
            <RepoCard key={r.id} repo={r} />
          ))}
        </div>
      </main>
    </>
  );
}
