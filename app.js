var express = require('express');
var cookieParser = require('cookie-parser');

var router = require('./routes/_bootstrap');
var requestLogger = require('./middlewares/request-logger');
var app = express();

var cors = require('./middlewares/cors');
var bearerAuth = require('./middlewares/bearer-authentication');

var responseHandler = require('./middlewares/response-handler');
var errorHandler = require('./middlewares/error-response-handler');

var wrap = require('./helper/wrap');

app.use(cors);
app.use(wrap(bearerAuth));

/**
 * Ensure response be JSON
 */
app.set('json spaces', 4);

/**
 * Ensure input JSON parsed into object
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(requestLogger);

app.use(cookieParser());

app.use(router);

app.use(errorHandler);
app.use(responseHandler);

module.exports = app;
