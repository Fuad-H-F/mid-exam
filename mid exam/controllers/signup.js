var express = require('express');
var db = require('./../models/db.js');
var router = express.Router();

router.get('/', function(req, res){

	res.render('signup/index');
			
});
router.post('/', function(req, res){
	
	var user = {
		fullname: req.body.fullname,
		username: req.body.username,
		password: req.body.password,
		type	: req.body.type
	}

	userModel.validate(user, function(status){
		
		if(status){
			res.cookie('username', req.body.uname);
			res.redirect('/home');	
		}else{
			res.send('invalid username/password');
		}
	});

});


module.exports = router;


