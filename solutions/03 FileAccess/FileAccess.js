var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	fs.readFile('TestToRead.txt', 'utf8', function(err, data){
		console.log(data);
		response.end(data);
	})
}).listen(process.argv[2]);