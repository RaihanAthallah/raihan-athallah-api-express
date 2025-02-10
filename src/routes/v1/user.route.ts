import express from "express";
import { userController } from "../../controllers";

const userRoutes = express.Router();

userRoutes.post("/register", userController.createUser);
userRoutes.post("/login", userController.loginUser);

export default userRoutes;
