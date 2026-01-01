import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import repoRoutes from "./routes/repo.routes.js";
import reviewRoutes from "./routes/review.routes.js";
import webhookRoutes from "./routes/webhook.routes.js";

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/repos", repoRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/webhook", webhookRoutes);

export default app;
