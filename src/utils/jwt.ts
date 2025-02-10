import jwt from "jsonwebtoken";
import { UserLoginData } from "../models/dto/user.dto";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

export const generateToken = (user: UserLoginData) => {
  const payload = {
    email: user.email,
    Username: user.username,
  };
  const secret = process.env.JWT_SECRET || "your-secret-key"; // Make sure you have a secret key
  const options = { expiresIn: "1h" };
  return jwt.sign(payload, secret, options);
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
