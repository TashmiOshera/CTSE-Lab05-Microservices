# CTSE-LAB05: Microservices Lab

## Overview
This lab demonstrates a **microservices system** built using the **MERN stack** (Node.js + Express), containerized with **Docker**, and orchestrated using **Docker Compose**.  
The system consists of four main components:

- **Item Service** – Manages items and inventory.  
- **Order Service** – Handles orders.  
- **Payment Service** – Processes payments.  
- **API Gateway** – Routes requests to the correct microservice.  

All services communicate **only through the API Gateway** running on port `8080`.

---

## Technology Stack
- Node.js + Express (for all services)  
- http-proxy-middleware (for API Gateway routing)  
- Docker & Docker Compose (for containerization)  
- JSON (for request and response bodies)  
- Postman (for API testing)

---

## Running the Project

1. Build the Docker images:
```bash
docker-compose build
