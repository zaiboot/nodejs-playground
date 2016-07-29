var http = require("http");

var port = 3000;

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World\n");
    console.log("url =", req.url);
}).listen(port);
