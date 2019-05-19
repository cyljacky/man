
// other known error please inherit fron this Error
class UnknownError extends Error{
  constructor(message) {
    super(message); 
    this.name = "UnknownError"; 
    this.code = 500;
  }
}

module.exports = UnknownError;