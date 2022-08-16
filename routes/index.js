var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log(req.query.ip);
  res.send({visitorId: process.env.MOCKVISITORID ?? '12345678'});
});

router.get('/personalised-js-and-css', function(req, res) {
  console.log(req.query.ip);
  res.send({
    js: '(function(){alert("Deze alert javascript is gefetched vanuit de UMS Mock api")}())',
    css: 'h1{color:#ef4189!important;}'
  });
});

module.exports = router;
