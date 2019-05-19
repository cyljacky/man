var logger = require("../helper/logger").get('general');

async function incomingRequestLog (req, res, next) {
  logger.info([req.method, req.path, JSON.stringify(req.body), JSON.stringify(req.params), JSON.stringify(req.query)]);
  next();
}

module.exports = incomingRequestLog;