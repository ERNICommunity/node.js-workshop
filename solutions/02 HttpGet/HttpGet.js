var http = require('http');

http.get("http://www.google.ch/index.html", function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
});