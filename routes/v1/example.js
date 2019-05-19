var express = require('express');
var router = express.Router();
var controller = require('../../controllers/example');
var wrap = require('../../helper/wrap');

/* GET /v1/example */
router.get('/', wrap(controller.getRequest));

/* POST /v1/example */
router.post('/', wrap(controller.postRequest));

/* GET /v1/example/<id> */
router.get('/:id([0-9]+)', wrap(controller.getIdRequest));

/* PUT /v1/example/example/<id> */
router.put('/example/:id([0-9]+)', function (req, res, next) {
  res.send('this is dummy endpoint to ' + req.params.id);
});

module.exports = router;