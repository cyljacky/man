var sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var databaseConfig = require('../configuration/database')[env];

module.exports = new sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, {
  dialect: databaseConfig.dialect,
  host: databaseConfig.host,
  port: databaseConfig.port,
});
