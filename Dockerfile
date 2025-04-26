# Build stage
FROM node:18 AS build
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Angular app for production
RUN npm run build

# Serve stage - using nginx to serve the built app
FROM nginx:alpine AS serve
COPY --from=build /app/dist/* /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Explicitly copy the assets folder to ensure images are included
COPY --from=build /app/dist/assets /usr/share/nginx/html/assets

# Make sure Nginx can access the files
RUN chmod -R 755 /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]