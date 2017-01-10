var express = require('express');
var app = express();

var port = 50000;
app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res){

    res.send('hello world');
}).get('/books', function(req, res){

    res.send('Hello Books');
} );
app.listen(port, function(err){
    console.log('Running server on port', port);
});
