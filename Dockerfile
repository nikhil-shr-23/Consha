version: '3.8'

services:
  web:
    container_name: consha-web
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "8080:80" # Map your local port 8080 to the container's port 80
    restart: unless-stopped