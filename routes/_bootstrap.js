var express = require('express');
var router = express.Router();
var fs = require('fs');

// any root path routing may put here
router.get('/', function(req, res, next) {
  res.send('List all API available');
})


/**
 * Recursively load modules within the directories
 * @param {Router} router Router object that to be assigned outing action
 * @param {string} dirPath Directory path that indicates the directory the function on load.
 */
function recursiveLoadRoute (router, dirPath) {
  var directoryEntities = fs.readdirSync('./routes' + dirPath, {withFileTypes: true});
  for (entity of directoryEntities) {
    if (entity.isDirectory()){
      recursiveLoadRoute(router, dirPath + '/' + entity.name);
    }else if(entity.isFile() && !(entity.name.startsWith('_'))){
      var routerName = dirPath + '/' + entity.name.replace(/\.js$/, '');
      var fileRouter = require('.' + routerName);
      router.use(routerName, fileRouter);
    }
  }
  return router;
}

recursiveLoadRoute (router, '');

module.exports = router;
