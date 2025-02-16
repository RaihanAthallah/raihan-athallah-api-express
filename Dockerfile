# Use Node.js as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build TypeScript project
RUN npm run build

# Expose the port the app runs on
EXPOSE 8090

# Start the server
CMD ["node", "dist/index.js"]
