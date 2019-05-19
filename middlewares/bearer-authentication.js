var User = require("../models/user");
var UnauthorizedError = require("../errors/unauthorizedError");
var wrap = require("../helper/wrap");

async function getBearerUser(req, res, next) {
  var auth = req.header('Authorization');
  if (auth && auth.split(" ")[0] === 'Bearer') {
    var user = await User.findOne({
      where: {token: auth.split(" ")[1]}
    });
    if (!user) {
      throw new UnauthorizedError ("The token is invalid.");
    }
  } else {
    throw new UnauthorizedError ("The request does not contain Bearer token.");
  }
  next();
}

module.exports = getBearerUser;

