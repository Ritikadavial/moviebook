//var model = require('../model/indexmodel');

exports.home = function(req, res) {
    console.log("hhhhhh");
    res.render('index/home');
    //model.home(req.body,res);	
    // console.log(res);
};