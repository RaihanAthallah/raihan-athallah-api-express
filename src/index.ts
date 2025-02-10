// In app.ts or index.ts
import express from "express";
import { experienceRoutes, profileRoutes, userRoutes, projectRoutes } from "./routes/v1"; // Adjust path as necessary
import { requestLogger } from "./middlewares/logger.middleware";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// Configure CORS
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(requestLogger);
// Add cookie parser middleware
app.use(cookieParser());
// Use the experience routes with the `/api/experiences` prefix
app.use("/api/experiences", experienceRoutes); // All routes in `experienceRoutes` will be prefixed with /api/experiences
app.use("/api/profiles", profileRoutes); // All routes in `profileRoutes` will be prefixed with /api/profiles
app.use("/api/projects", projectRoutes); // All routes in `projectRoutes` will be prefixed with /api/projects
app.use("/api/user", userRoutes); // All routes in `userRoutes` will be prefixed with /api/user

// Optional error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send({ message: "Something went wrong!" });
// });

// Start the server
const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Full URL: http://localhost:${PORT}`);
});
