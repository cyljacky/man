var logger = require("../helper/logger").get('error');

function errorHandler (err, req, res, next){
  var errorCode = err.code || 500;
  logger.error(err.stack);
  res.status(errorCode).json({
    "code": errorCode,
    "success": false
  });
}

module.exports = errorHandler;