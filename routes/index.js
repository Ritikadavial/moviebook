const express = require('express');

const  Router = express.Router();

const  indexController = require('../controller/indexController');

// Home page route
// router.get('/', function(req, res){
//   res.render('index/home');
// });

Router.get('/' , indexController.home);

//app.use('/', router);

module.exports = Router;

