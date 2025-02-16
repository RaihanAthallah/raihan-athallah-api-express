# Use official Node.js LTS version as base image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./

# Install dependencies without dev dependencies
RUN npm ci --omit=dev  

# Copy the rest of the application files
COPY . .

# Build the TypeScript project
RUN npm run build

# Use a minimal base image for production
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy built files and production dependencies
COPY --from=builder /app/package.json /app/package-lock.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist

# Expose the application port
EXPOSE 8090

# Set the command to start the application
CMD ["node", "dist/index.js"]
