var express = require('express');
var regModel = require('./../models/registration-model');
var router = express.Router();

router.get('/', function(req, res){

	res.render('admin/index');
			
});
router.get('/admo', function(req, res){

	res.render('admin/admo');
			
});
router.post('/admo', function(req, res){
	var user = {
		fullname: req.body.fullname,
		username: req.body.username,
		password: req.body.password,
		type	: "moderator"
	}

	regModel.insert(user, function(status){
		if(status){
			console.log("successful");
			res.redirect('/admin');
		}else{
			res.redirect('/admo');
		}
	});
});

router.get('/test/:name/:id', function(req, res){

	res.send(req.params.id+ "|"+req.params.name)
})



module.exports = router;


