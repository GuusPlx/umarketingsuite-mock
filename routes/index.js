var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({visitorId: '123456789'});
});

module.exports = router;
