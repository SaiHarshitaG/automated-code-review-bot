import "./ReviewSummary.css";

export default function ReviewSummary({ review }) {
  return (
    <div className="review-card">
      <h3>{review.repo}</h3>
      <p>PR #{review.prNumber}</p>
      <p className="summary">{review.summary}</p>
      <span className={`status ${review.status}`}>
        {review.status}
      </span>
    </div>
  );
}
