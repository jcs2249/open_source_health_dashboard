#Building a simple web server with nginx to serve an HTML file (Stage 1)
FROM alpine AS builder
WORKDIR /app
COPY index.html .

# Serve the HTML file using nginx (Stage 2)
FROM nginx:alpine
COPY --from=builder /app/index.html /usr/share/nginx/html/index.html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


