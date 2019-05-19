var cors = require('cors');

var whitelist = require('../configuration/environment').corsHosts;

if (typeof whitelist !== 'undefined' && whitelist.length > 0) {
  var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }
  module.exports = cors(corsOptions);
} else {
  module.exports = cors();
}