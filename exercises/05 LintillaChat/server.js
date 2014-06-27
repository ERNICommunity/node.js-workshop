var express = require('express')
,   app = express()
,   server = require('http').createServer(app)
,   io = require('socket.io').listen(server)
,   conf = require('./config.json');

// todo: install the 'express' and 'socket.io' modules

// Webserver
server.listen(conf.port);

app.configure(function(){
	// provide static files to the browser 
	app.use(express.static(__dirname + '/public'));
});

app.get('/', function (req, res) {
	// todo: return the /public/index.html file as soon as the root path is called
});

// Websocket
io.sockets.on('connection', function (socket) {
	// todo: if a new connection is established send a 'chat' event
	// with the following two parameters
	// time: new Data() 
	// text: 'You are now connected with the Lintilla chat server!'
	
	// listen to the 'chat' event and emit incoming data again as 'chat' event
	// with the following three parameters
	// time: new Date()
	// name: data.name || 'anonymous'
	// text: data.text
});

console.log('The server is running on port: ' + conf.port);