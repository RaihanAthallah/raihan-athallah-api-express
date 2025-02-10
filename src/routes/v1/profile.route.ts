// In experience.routes.ts
import express from "express";
import { profileController } from "../../controllers";
import { authenticate } from "../../middlewares/auth.middleware";

const profileRoutes = express.Router();

profileRoutes.post("/", authenticate, profileController.createProfile);
profileRoutes.put("/:id", authenticate, profileController.updateProfile);

export default profileRoutes;
