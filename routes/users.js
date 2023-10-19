var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    statuscode:200,
    message:"Welcome to user router"
  });
});


module.exports = router;
