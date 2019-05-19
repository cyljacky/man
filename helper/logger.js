var winston = require('winston');
var rotateFile = require('winston-daily-rotate-file');
var logConfig = require('../configuration/logger');

for (config of logConfig){
  var loggerConfig = {
    level: (process.env.NODE_ENV == 'production' ? 'info' : 'debug'),
    defaultMeta: { service: 'api' },
    format: winston.format.combine(
      winston.format.label({
        label: config.category
      }),
      winston.format.timestamp(),
      winston.format.printf((info) => {
        return `${info.timestamp} - ${info.label}:[${info.level}]: ${info.message}`;
      })
    ),
    transports:[
      new rotateFile({
        filename: config.filename,
        dirname: config.dirname,
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: 10,
        auditFile: config.dirname + '/' + config.category + '-audit.json'
      })
    ]
  };
  if (process.env.NODE_ENV !== 'production'){
    loggerConfig.transports.push(new winston.transports.Console());
  }
  winston.loggers.add(config.category, loggerConfig);
}

// to use logger, just import this module and .get() the category defined in configuration/logger.js .
module.exports = winston.loggers;