import Navbar from "../components/Navbar";
import "./ReviewDetails.css";

export default function ReviewDetails() {
  return (
    <>
      <Navbar />
      <main className="page">
        <h1>Review Details</h1>
        <div className="detail-card">
          <p><strong>Repository:</strong> sample-repo</p>
          <p><strong>PR:</strong> #12</p>
          <p>
            <strong>AI Review:</strong><br />
            This pull request improves performance but needs error handling.
          </p>
        </div>
      </main>
    </>
  );
}
