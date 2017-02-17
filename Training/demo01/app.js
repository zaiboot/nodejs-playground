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
initViewEngine(app);
var bookRouter = express.Router();
var bookRouterOptions = {
    express: express,
    nav: nav
};
var bookRouter = require('./routes/bookRoutes.js')(bookRouterOptions);
require('./mssql.config.js');
app.use('/books', bookRouter);

//should come from the DB
var books = [
    {
        title: 'Lord of the Rings - Fellowship Of The Ring',
        genre: 'Fantasy',
        author: 'JR Tolkien',
        read: true
    },
    {
        title: 'La Casa de los Espiritus',
        genre: 'Magical Romanticism',
        author: 'Isabel Allende',
        read: false
    },
    {
        title: 'Carrie',
        genre: 'Horror',
        author: 'Stephen King',
        read: false
    }
];
bookRouter.route('/')
    .get(function (req, res) {
        var model = {
            nav: [
                {link: '/books', text: 'Books'},
                {link: '/authors', text: 'Authors'}
            ],
            title: 'The Library | List of Books',
            books: books
        };
        res.render('books', model);
    });
bookRouter.route('/single')
    .get(function (req, res) {
        res.send('hello single book');
    });
app.use('/books', bookRouter);

app.get('/', function (req, res) {
    var model = {
        nav: [
            {link: '/books', text: 'Books'},
            {link: '/authors', text: 'Authors'}
        ],
        title: 'The Library'
    };

    res.render('index', model);
});

// this call will be overwritten by the bookRouter
// app.get('/books', function (req, res) {
//     res.send('Hello Books');
// });
app.listen(port, function (err) {
    console.log('Running server on port: ', port);
});

function initViewEngine(app) {
    //app.set('view engine', 'jade');
    //var handlebars = require('express-handlebars');
    //app.engine('.hbs', handlebars({extname: '.hbs'}));
    //app.set('view engine', '.hbs');
    app.set('view engine', 'ejs');

}

