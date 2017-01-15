var url = "http://api.openweathermap.org/data/2.5/weather?id=6167865"
var appid = "&APPID=7014645b4bcc717ef953ceeb9b8f2171"
var units = "&units=metric"

var request = require("request");
var fs = require('fs');


request(url + appid + units, function(error, response, body) {
	var test = fs.createWriteStream('./text.json');
  	var jsonPretty = JSON.stringify(JSON.parse(body),null,2); 
  	test.write(jsonPretty);
});