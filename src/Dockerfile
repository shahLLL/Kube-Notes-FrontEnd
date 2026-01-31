# Stage 1: Build the application
FROM node:20-alpine AS build-stage
ARG VITE_AUTH_API_URL
ARG VITE_NOTES_API_URL
ENV VITE_AUTH_API_URL=$VITE_AUTH_API_URL
ENV VITE_NOTES_API_URL=$VITE_NOTES_API_URL
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:stable-alpine AS production-stage
ARG VITE_AUTH_API_URL
ARG VITE_NOTES_API_URL
ENV VITE_AUTH_API_URL=$VITE_AUTH_API_URL
ENV VITE_NOTES_API_URL=$VITE_NOTES_API_URL
COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN chmod -R 755 /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]