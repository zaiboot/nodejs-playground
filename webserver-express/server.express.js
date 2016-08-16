var http = require("http");
var express = require("express");
var app = express();

var port = 3000;
var controllers = require("./controllers");

controllers.init(app);

http.createServer(app).listen(port);
