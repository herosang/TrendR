//RUN SHIT WITH ngrok http 3000

var http = require('http');
console.log("pls");
function onRequest(request, response){
	console.log("Recieved Request.");
	response.writeHead(200, {"Context-Type" : "text/plain"});
	response.write("Data");
	response.end();
}

http.createServer(onRequest).listen(3000);
console.log("Baby lets go");