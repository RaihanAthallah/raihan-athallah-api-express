import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Middleware to authenticate the user
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    res.status(401).json({ status: 401, message: "Access denied. No token provided." });
    return; // End the function execution here
  }

  try {
    // Decode the token directly
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "your-secret-key") as { Username: string };

    if (!decoded.Username) {
      res.status(401).json({ status: 401, message: "Invalid token." });
      return; // End the function execution here
    }

    // check expiration
    const now = Date.now().valueOf() / 1000;
    // if (decoded.exp && decoded.exp < now) {
    //   res.status(403).json({ status: 401, message: "Token expired." });
    //   return; // End the function execution here
    // }

    // Set the userId in a cookie
    // res.cookie("userId", decoded.userId, {
    //   httpOnly: true, // Makes the cookie inaccessible to JavaScript (for security)
    //   secure: process.env.NODE_ENV === "production", // Only send cookies over HTTPS in production
    //   maxAge: 3600000, // 1 hour expiration
    // });

    // Continue to the next middleware or route handler
    next();
  } catch (err) {
    res.status(403).json({ status: 401, message: "Invalid or expired token." });
  }
};
