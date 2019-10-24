var express = require('express');
var regModel = require('./../models/registration-model');
var conModel = require('./../models/content-model');

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
router.get('/demo', function(req, res){

	res.render('admin/demo');
			
});
router.post('/demo', function(req, res){
	var user = {
		username: req.body.username,
	}

	regModel.delete(user, function(status){
		if(status){
			console.log("successful");
			res.redirect('/admin');
		}else{
			res.redirect('/admin/demo');
		}
	});
});




router.get('/adco', function(req, res){

	res.render('admin/adco');
			
});
router.post('/adco', function(req, res){
	var user = {

		type	: req.body.type,
		name: req.body.name,
		language: req.body.language,
		genre: req.body.genre
	}

	conModel.insert(user, function(status){
		if(status){
			console.log("successful");
			res.redirect('/admin');
		}else{
			res.redirect('/adco');
		}
	});
});
router.get('/deco', function(req, res){

	res.render('admin/deco');
			
});
router.post('/deco', function(req, res){
	var user = {
		name: req.body.name,
	}

	conModel.delete(user, function(status){
		if(status){
			console.log("successful");
			res.redirect('/admin');
		}else{
			res.redirect('/admin/deco');
		}
	});
});

router.get('/test/:name/:id', function(req, res){

	res.send(req.params.id+ "|"+req.params.name)
})



module.exports = router;


