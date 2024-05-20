const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, X-Heirloom-API-Version, X-Heirloom-API-Key, X-Heirloom-Lock-ID"
  );
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://api.heirloom.io",
    changeOrigin: true,
    pathRewrite: {
      "^/api": "", // remove /api prefix
    },
  })
);

app.listen(5001, () => {
  console.log("Proxy server is running on http://localhost:5001");
});
