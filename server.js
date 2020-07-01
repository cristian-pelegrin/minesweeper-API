require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pino = require('pino');
const expressPino = require('express-pino-logger');
const errorParser = require('./src/middlewares/error-parser');

// setup up port
const PORT = process.env.PORT || 3000;

// create app
const app = express();

// setup up
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// configure routes
require('./src/routes/index')(app);

// setup error parsers
app.use(errorParser.notFound);
app.use(errorParser.systemError);

// setup logger
const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
const expressLogger = expressPino({ logger });
app.use(expressLogger);

// start Server
app.listen(PORT, () => console.log(`Server running on HTTP PORT: ${PORT}`));
