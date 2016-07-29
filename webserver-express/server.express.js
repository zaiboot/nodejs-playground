var http = require("http");
var express = require("express");
var app = express();

var port = 3000;

app.get("/", function(req, res){

    res.send("quincho <b>millonario</b>");

});

app.get("/api/users", function(req, res){

    var users = [
        {name: "zaiboot",  isValid: true, group:"Admin", today: new Date() }        ,
        {name: "quincho",  isValid: true, group:"Millonario", today: new Date() }
    ];

    res.set("Content-Type", "application/json");
    res.set("Content-Disposition", "attachment;filename='users.json'");

    res.send( users );
});

http.createServer(app).listen(port);
