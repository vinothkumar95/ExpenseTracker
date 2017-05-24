var mongoose = require('mongoose')
var Category = require('../models/category');

module.exports.controller = function(app) {

	app.get('/', function(req, res) {
		res.send('data', { title: 'Bookshop | Categories' })
	});

	app.post('/addCategory', function(req, res) {
		var category = new Category({
			name: 'vinoth',
			description: 'description'
		});
		category.save();
		res.send('data')
	});

	app.get('/getCategories', function(req, res) {
		var resp = Category.find({}).exec(function(err, des) {
			console.log(des)
			res.send('data', des);
		})
	});
}