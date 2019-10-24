var express = require('express');
var regModel = require('./../models/registration-model');
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

	regModel.insert(user, function(status){
		if(status){
			console.log("successful");
			res.redirect('/home');
		}else{
			res.redirect('/signup');
		}
	});
});


module.exports = router;


