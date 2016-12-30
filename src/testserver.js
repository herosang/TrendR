
//Server app
var express = require('express');
var app = express();


app.get('/', function (req, res) {
    //Get html
    res.sendFile(__dirname + "/template.html");
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});