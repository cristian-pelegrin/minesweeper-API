const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.1',
    info: {
      title: 'minesweeper-api',
      version: '1.0.0',
      description:
        'API for the Minesweeper game',
      contact: {
        name: 'Cristian Pelegrin',
        url: 'https://www.linkedin.com/in/cristianpelegrin/',
        email: 'cristian.gilberto.pelegrin@gmail.com',
      },
    },
    externalDocs: {
      description: 'Find out more about Swagger',
      url: 'http://swagger.io',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
      },
    ],
  },
  apis: [
    './src/routes/api/game.js',
    './src/models/game-model.js',
    './src/models/board-model.js',
    './src/models/cell-model.js',
    './src/config/swagger/swagger-error-schemas.js',
  ],
};

module.exports = swaggerJsdoc(options);
