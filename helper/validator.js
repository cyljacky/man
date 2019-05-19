
// helper function, if other component need to use, need to move this to helper folder
function isInt(value) {
  return !isNaN(value) && (function (x) { return (x | 0) === x; })(parseFloat(value))
}

module.exports = { isInt };