import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import xss from "xss-clean";
import morgan from "morgan";
import chatRoutes from "./routes/chat.js";

dotenv.config();
const app = express();

// Basic security hardening
app.use(helmet());
app.use(xss());

// Logging
app.use(morgan("combined"));

// CORS restrict (allow only known origins in production)
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "http://localhost:3000,http://localhost:5173").split(",");
app.use(cors({ origin: (origin, cb) => cb(null, !origin || allowedOrigins.indexOf(origin) !== -1) }));

app.use(express.json());

// Rate limiting for API endpoints
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 200 });
app.use("/api/", limiter);

app.use("/api/chat", chatRoutes);
app.use("/api/posts", (await import("./routes/posts.js")).default);
app.use("/api/resources", (await import("./routes/resources.js")).default);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
