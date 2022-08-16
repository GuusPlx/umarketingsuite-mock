var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log(req.query.ip);
  res.send({visitorId: process.env.MOCKVISITORID ?? '12345678'});
});

module.exports = router;
