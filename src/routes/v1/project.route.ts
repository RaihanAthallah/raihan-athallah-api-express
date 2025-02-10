// In experience.routes.ts
import express from "express";
import { projectController } from "../../controllers";
import { authenticate } from "../../middlewares/auth.middleware";

const projectRoutes = express.Router();

projectRoutes.post("/", authenticate, projectController.createProject);
projectRoutes.get("/:id", projectController.getProject);
projectRoutes.get("/", projectController.getAllProjects);

export default projectRoutes;
