# Use the official Node.js image with a specific version
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app 

# Copy the package.json and package-lock.json (if available) to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app in development mode
CMD ["npm", "run", "dev"]
