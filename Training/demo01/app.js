var express = require('express');
var app = express();

var port = process.env.PORT || 50000;
app.use(express.static('public'));
//app.use(express.static('src/views'));
app.set('views', './src/views');
//app.set('view engine', 'jade');
//var handlebars = require('express-handlebars');
//app.engine('.hbs', handlebars({extname: '.hbs'}));
//app.set('view engine', '.hbs');
app.set('view engine', 'ejs');

var bookRouter = require('./routes/bookRoutes.js')(express);
app.use('/books', bookRouter);

app.get('/', function(req, res) {
    var model = generateBaseModel();
    res.render('index', model);
});

// this route will be overriden by the bookRouter
// .get('/books', function(req, res) {
//     res.send('Hello Books');
// });
app.listen(port, function(err) {
    console.log('Running server on port: ', port);
});

function generateBaseModel() {
    return {
        nav: [
                {link:'/books', title:'Books'},
                {link:'/authors', title:'Authors'}
            ],
        title:'The Library'};
}
