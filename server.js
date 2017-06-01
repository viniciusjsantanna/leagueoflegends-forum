var express = require('express');
var app = express();
var path = require('path');

// configure our app to handle CORS requests
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});


// set static files location, front end stuff
app.use(express.static(__dirname + '/public'));

// Main route, send us to front end
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

//Port
app.listen(8088);
console.log("Test me on port 8088");