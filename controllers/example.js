
async function getRequest (req, res, next) {
  res.locals.response = "Get request example";
  next();
}

async function postRequest (req, res, next) {
  res.locals.response = "Post request example";
  next();
}

async function getIdRequest (req, res, next) {
  var id  = req.params.id;
  res.locals.response = "Get request example with ID" + id;
  next();
}

module.exports = {getRequest, postRequest, getIdRequest};