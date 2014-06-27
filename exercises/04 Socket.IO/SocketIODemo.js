var http = require('http');
var socketio = require('socket.io');
// todo: install the socket.io module
var fs = require('fs');

var handler = function(request, response){
	// read the index.html file and return as response with 
	// writeHead(200); for a normal response
	// writeHead(500); in case of an error
};

var app = http.createServer(handler);
var io = socketio.listen(app);

io.sockets.on('connection', function(socket){
	// add an interval method that emits 
	// the time stamp to the client every two seconds
	
	// listen to the 'submit' event from the client
	// and write the data to the console
});

app.listen(5000);

console.log('Server is running!');