const { createProxyMiddleware } = require('http-proxy-middleware');

const hostLocation='localhost';

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: `http://${hostLocation}:8080`,
            changeOrigin: true
        })
    );
    app.use(
        createProxyMiddleware('/oauth2', {
            target: `http://${hostLocation}:8080`,
            changeOrigin: true
        })
    );
};