FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the project
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]