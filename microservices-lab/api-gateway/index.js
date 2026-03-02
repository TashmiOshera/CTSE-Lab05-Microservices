// api-gateway/index.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// ------------------------
// Server configuration
// Equivalent to `server: port: 8080`
const PORT = 8080;

// ------------------------
// Routes configuration
// Equivalent to Spring Cloud Gateway routes
// spring:
//   cloud:
//     gateway:
//       routes:
//         - id: item-service
//           uri: http://item-service:8081
//           predicates: Path=/items/**

// 1️⃣ Item Service
app.use(
  '/items', // predicate: Path=/items/**
  createProxyMiddleware({
    target: 'http://item-service:8081', // uri
    changeOrigin: true,
    pathRewrite: { '^/items': '/items' } // keep original path for backend service
  })
);

// 2️⃣ Order Service
app.use(
  '/orders', // predicate: Path=/orders/**
  createProxyMiddleware({
    target: 'http://order-service:8082', // uri
    changeOrigin: true,
    pathRewrite: { '^/orders': '/orders' }
  })
);

// 3️⃣ Payment Service
app.use(
  '/payments', // predicate: Path=/payments/**
  createProxyMiddleware({
    target: 'http://payment-service:8083', // uri
    changeOrigin: true,
    pathRewrite: { '^/payments': '/payments' }
  })
);

// Optional root endpoint (just for testing)
app.get('/', (req, res) => {
  res.send('API Gateway running. Use /items, /orders, /payments');
});

// Start server
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});