# Use an official Node runtime as a parent image
FROM node:22

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the app
RUN npm run build

# Install serve to serve the build folder
RUN npm install -g serve

# Set the command to run the app
CMD ["serve", "-s", "build"]

# Expose port 5000
EXPOSE 5000