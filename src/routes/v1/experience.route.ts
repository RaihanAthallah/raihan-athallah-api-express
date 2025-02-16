// In experience.routes.ts
import express from "express";
import { experienceController } from "../../controllers";
import { authenticate } from "../../middlewares/auth.middleware";

const experienceRoutes = express.Router();

experienceRoutes.post("/", authenticate, experienceController.createExperience);
experienceRoutes.put("/:id", authenticate, experienceController.updateExperience);
experienceRoutes.delete("/:id", authenticate, experienceController.deleteExperience);
experienceRoutes.get("/:id", experienceController.getExperienceById);
experienceRoutes.get("/", experienceController.getExperiences);
experienceRoutes.get("/hello", experienceController.helloWorld);

export default experienceRoutes;
