// this file used for sequelize to load config, which indicated in .sequelizerc
// TODO: remove this file, auto-load the config marked in param.js
module.exports = require('./environment').database;