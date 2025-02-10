import { Request, Response, NextFunction } from "express";

// Middleware to log requests and errors
export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const { method, url } = req;
  const timestamp = new Date().toISOString();

  // Log request details
  console.log(`[${timestamp}] ${method} ${url}`);

  // Override the send function to log errors
  const originalSend = res.send;

  res.send = function (body: any): Response<any> {
    const statusCode = res.statusCode;

    // Log errors for status codes 400 or higher
    if (statusCode >= 400) {
      console.error(`[${timestamp}] Error ${statusCode}: ${method} ${url} - ${body}`);
    }

    // Call the original send function and return the response object
    return originalSend.call(this, body);
  };

  // Continue to the next middleware
  next();
};
