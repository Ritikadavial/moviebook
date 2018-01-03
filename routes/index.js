var express = require('express');
var router = module.exports = express();

// Home page route
router.get('/', function(req, res){
  res.render('index/home');
});

//app.use('/', router);

module.exports = router;

