'use strict';
var path = process.cwd();
var multer  = require('multer');
var upload = multer({ dest: './uploads' });

module.exports = function (app) {
	app.get('/', function (req, res) {
  		res.sendFile(path + '/public/index.html');
	}); 
	app.post('/', upload.single('anyFile'), function (req, res) {
 		res.json({"The size of your file in bit is" : req.file.size}); 
	})
 };
