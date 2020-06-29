const swaggerUi = require('swagger-ui-express');
const api = require('./api');
const swaggerJsDoc = require('../config/swagger/swagger-jsdoc');

module.exports = (app) => {
  app.use('/api', api);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc, { explorer: true }));
  app.get('/health-check', (req, res) => res.status(200).json({ status: true }));
};
