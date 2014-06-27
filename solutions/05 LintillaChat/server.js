var express = require('express')
,   app = express()
,   server = require('http').createServer(app)
,   io = require('socket.io').listen(server)
,   conf = require('./config.json');

// Webserver
server.listen(conf.port);

app.configure(function(){
	// provide static files to the browser 
	app.use(express.static(__dirname + '/public'));
});

// return index.html as soon as the root path is called
app.get('/', function (req, res) {
	res.sendfile(__dirname + '/public/index.html');
});

// Websocket
io.sockets.on('connection', function (socket) {
	// new connection established
	socket.emit('chat', { time: new Date(), text: 'You are now connected with the Lintilla chat server!' });
	// receiving chat message from connected user
	socket.on('chat', function (data) {
		// after receiving the text from one user it is emitted back to all connected clients
		io.sockets.emit('chat', { time: new Date(), name: data.name || 'anonymous', text: data.text });
	});
});

console.log('The server is running on port: ' + conf.port);