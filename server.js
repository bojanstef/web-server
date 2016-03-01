const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const middleware = require('./middleware.js');
// app.get('/', function(request, response) {
// 	response.send('Hello Express!');
// });

//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(request, response) {
	response.send('About us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('Express server started at port: ' + PORT);
});
