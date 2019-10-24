var express = require('express');
var regModel = require('./../models/registration-model');

var router = express.Router();

router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){
	
	var user = {
		username: req.body.username,
		password: req.body.password
	}

	regModel.validate(user, function(result){
		
		if(result=="admin"){
			res.cookie('username', req.body.uname);
			res.redirect('/admin');
		}else if(result=="moderator"){
			res.cookie('username', req.body.uname);
			res.redirect('/moderator');
		}
		else{
			res.send('invalid username/password');
		}
	});

});

module.exports = router;


