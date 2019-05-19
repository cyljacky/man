
async function responseHandler (req, res, next) {
  var response = {
    "code": 200,
    "success": true
  };
  if (res.locals.response) {
    response["response"] = res.locals.response
  }
  res.json(response);
}

module.exports = responseHandler;