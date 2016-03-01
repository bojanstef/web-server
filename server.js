const express = require('express');
const app = express();
const PORT = 3000;
// app.get('/', function(request, response) {
// 	response.send('Hello Express!');
// });

var middleware = {
	requireAuthentication: function(request, response, next) {
		console.log('Private route hit!');
		next();
	},
	logger: function(request, response, next) {
		console.log('Request: ' + new Date().toString() + ' ' + request.method + ' ' + request.originalUrl);
		next();
	}
};

//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(request, response) {
	response.send('About us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('Express server started at port: ' + PORT);
});
