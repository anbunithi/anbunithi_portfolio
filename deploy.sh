#!/bin/bash

# Build Docker image
echo "Building Docker image..."
docker build -t anbunithi-portfolio .

# Run the container locally for testing (optional)
echo "Running container locally on port 8080..."
docker run -d -p 8080:80 --name anbunithi-portfolio-container anbunithi-portfolio

echo "Container is running at http://localhost:8080"
echo "Press Ctrl+C to continue to Firebase deployment..."
read -n 1

# Stop and remove the container
docker stop anbunithi-portfolio-container
docker rm anbunithi-portfolio-container

# Extract the built files from the Docker image
echo "Extracting built files from Docker image..."
docker create --name temp anbunithi-portfolio
mkdir -p dist/anbunithi-portfolio
docker cp temp:/usr/share/nginx/html/. dist/anbunithi-portfolio/
docker rm temp

# Install Firebase CLI if not already installed
echo "Checking Firebase CLI..."
if ! command -v firebase &> /dev/null; then
    echo "Firebase CLI not found. Installing..."
    npm install -g firebase-tools
fi

# Login to Firebase (if not already logged in)
echo "Logging into Firebase..."
firebase login

# Deploy to Firebase
echo "Deploying to Firebase..."
firebase deploy

echo "Deployment complete!"