# Start from an official image that already has Node.js 26
FROM node:26-alpine

# Work inside the /app folder in the image
WORKDIR /app

# Copy the project file and install dependencies
COPY package.json ./
RUN npm install --omit=dev

# Copy the app code
COPY server.js ./

# The app listens on port 3000
EXPOSE 3000

# Run as the non-root "node" user for safety
USER node

# Start the app
CMD ["node", "server.js"]