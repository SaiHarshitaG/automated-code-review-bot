import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Repositories from "./pages/Repositories";
import PullRequests from "./pages/PullRequests";
import ReviewDetails from "./pages/ReviewDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/repos" element={<Repositories />} />
      <Route path="/repos/:repo/prs" element={<PullRequests />} />
      <Route path="/reviews/:id" element={<ReviewDetails />} />
    </Routes>
  );
}
