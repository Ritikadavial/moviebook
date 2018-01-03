//require express framework
var express = require('express');

//require favicon
var favicon = require('serve-favicon');

//require path module for dealing with file and directory paths
var path = require('path');

//load all functions of express framework in global (module.exports) object of node js
var app = module.exports = express();

//get db connection of application defined in lib
var db = require('./model/lib/dbConnection');

//get all routes of application defined in routes files
var routes = require('./routes/index');

//get all controllers of application in controller file
//var appController = require('./controller/indexController');

//application configurations
var engine = require('ejs-locals');
app.engine('ejs', engine);
app.set('view engine', 'ejs'); 
//app.use(express.bodyParser());
//app.use(expressValidator());
//app.use(express.methodOverride());
app.use(express.static(__dirname + '/public'));
app.use(favicon(path.join(__dirname, 'public/images/', 'favicon.ico')));

app.use('/',routes);

//app.use(express.static(__dirname + '/uploads'));
//app.use(express.bodyParser({uploadDir:'/uploads'}));

// index page 
//app.get('/', appController.home);

/*app.get('/', function(req, res) {
    res.render('index/home');
});*/


app.listen(3003, function() {
  console.log('Listening on port 3003...')
});

