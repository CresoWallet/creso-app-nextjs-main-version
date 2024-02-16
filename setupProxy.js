const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      // target: "https://core.creso.io",
      target: "http://192.168.29.207:8080",
      changeOrigin: true,
    })
  );
};
