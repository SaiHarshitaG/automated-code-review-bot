import Navbar from "../components/Navbar";
import ReviewSummary from "../components/ReviewSummary";
import useFetch from "../hooks/useFetch";
import { getReviews } from "../api/review.api";
import "./Dashboard.css";

export default function Dashboard() {
  const reviews = useFetch(getReviews);

  return (
    <>
      <Navbar />
      <main className="page">
        <h1>Pull Request Reviews</h1>

        <div className="grid">
          {reviews.map(r => (
            <ReviewSummary key={r._id} review={r} />
          ))}
        </div>
      </main>
    </>
  );
}
