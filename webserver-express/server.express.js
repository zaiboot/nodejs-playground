var http = require("http");
var express = require("express");
var app = express();

var port = 3000;

// this middleware will be executed for every request to the app
app.use(function (req, res, next) {
    res.contentType('application/json');
    next();
    res.end();
});

var controllers = require("./controllers");
controllers.init(app);

http.createServer(app).listen(port);
