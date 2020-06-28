const api = require('./api');

module.exports = (app) => {
  app.use('/api', api);
  app.get('/health-check', (req, res) => res.status(200).json({ status: true }));
};
