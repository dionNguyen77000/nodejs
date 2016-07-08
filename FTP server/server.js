var http = require('http');
var http = require('http');
var fs = require('fs'); // core module for file

//404 response
function send404Response(response){
	response.writeHead(404, {"Content-Type" : "text/plain"});
	response.write("Error 404: Page not found");
	response.end();
}
/*callback funtion onRequest: handle user request
1st parameter: object request: information about the user request: what infor they want to get,
what webpage they try to get, what file they want?
2nd parameter: object response: object we want to send back to user */
function onRequest(request, response){
	if(request.method == 'GET' && request.url =='/') {
		response.writeHead(200, {"Content-Type" : "text/html"});
		fs.createReadStream("./index.html").pipe(response);
	} else {
		send404Response(response);
	}
}

//server will listen to request at port 8888. onRequest is the callback function
http.createServer(onRequest).listen(8800);
console.log("Server is now running...");