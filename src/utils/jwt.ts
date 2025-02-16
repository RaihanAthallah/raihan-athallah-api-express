import jwt, { SignOptions, Secret } from "jsonwebtoken";
import { UserLoginData } from "../models/dto/user.dto";

const JWT_SECRET: Secret = process.env.JWT_SECRET || "your_secret_key";

export const generateToken = (user: UserLoginData): string => {
  const payload = {
    email: user.email,
    username: user.username, // Ensure consistent casing
  };

  const options: SignOptions = { expiresIn: "1h" }; // Explicitly typed

  return jwt.sign(payload, JWT_SECRET, options);
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, JWT_SECRET);
};
