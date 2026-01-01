import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <h2>CodeReviewBot</h2>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/repos">Repositories</Link>
      </nav>
    </header>
  );
}
