import "./Login.css";
import { loginWithGitHub } from "../api/auth.api";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Automated Code Review Bot</h1>
        <p>Connect your GitHub repositories and get AI-powered PR reviews.</p>
        <button onClick={loginWithGitHub}>
          Login with GitHub
        </button>
      </div>
    </div>
  );
}
