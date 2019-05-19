var GeneralError = require('./unknownError');

class UnauthorizedError extends GeneralError{
  constructor(message) {
    super(message); 
    this.name = "UnauthorizedError"; 
    this.code = 401;
  }
}

module.exports = UnauthorizedError;