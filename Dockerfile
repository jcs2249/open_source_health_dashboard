#Building a simple web server with nginx to serve an HTML file
FROM alpine AS builder
WORKDIR /app
COPY index.html .

# Serve the HTML file using nginx
FROM nginx:alpine
COPY --from=builder /app/index.html /usr/share/nginx/html/index.html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


