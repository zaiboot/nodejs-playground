var express = require('express');
var app = express();
var nav = [
            {link: '/books', title: 'Books'},
            {link: '/authors', title: 'Authors'}
        ];
var port = process.env.PORT || 50000;
app.use(express.static('public'));
//app.use(express.static('src/views'));
app.set('views', './src/views');
//app.set('view engine', 'jade');
//var handlebars = require('express-handlebars');
//app.engine('.hbs', handlebars({extname: '.hbs'}));
//app.set('view engine', '.hbs');
app.set('view engine', 'ejs');
var bookRouterOptions = {
    express: express,
    nav: nav
};
var bookRouter = require('./routes/bookRoutes.js')(bookRouterOptions);
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
        nav: nav,
        title:'The Library'};
}
