// https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development#configuring-the-proxy-manually
// https://github.com/chimurai/http-proxy-middleware


const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/devApi', {
      target: `http://localhost:8003/frontendApi`,
      changeOrigin: true,
      pathRewrite: {
        '^/devApi': ''
      },
      onProxyReq(proxyReq, req, res) {
        // add custom header to request
        // proxyReq.setHeader('Authorization', 'xxxxx');
        // console.log(req)
        // or log the req
      }
    })
  );
};
