import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { AuthProvider } from "./context/AuthContext";
import { RepoProvider } from "./context/RepoContext";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RepoProvider>
          <AppRoutes />
        </RepoProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
