# Stage 1: Build the Angular app
FROM node:20.14.0-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist/book-network-ui/browser /usr/share/nginx/html

EXPOSE 80