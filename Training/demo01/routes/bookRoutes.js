module.exports = function (options) {

    var bookRouter = options.express.Router();
    var nav = options.nav;
    var sql = require('mssql');

    function getListOfBooks() {
        var request = new sql.Request();

        return request.query('SELECT * FROM  books').then(function (recordset) {
            return recordset;
        });
    }

    function getSingleBook(bookId) {

    }

    function generateBaseModel() {
        return {
            nav: nav,
            title: 'The Library'
        };
    }
    bookRouter.route('/')
        .get(function (req, res) {
            var model = generateBaseModel();
            model.title += ' | List of books';
            getListOfBooks().then(function (data) {
                model = Object.assign({books: data}, model);
            }).then(function () {
                res.render('books/bookListView', model);

            });

        });

    bookRouter.route('/single/:bookid')
        .all(function(req, res, next) {
            var bookId = parseInt(req.params.bookid);
            var ps = new sql.PreparedStatement();
            ps.input('bookid', sql.Int);
            ps.prepare('SELECT * FROM  books WHERE id = @bookid ', function(err) {
                if (err) {
                    console.log('Error preparing statement ');
                }else {
                    ps.execute({bookid:bookId}, function (err , recordset) {
                            if (err) {
                                console.log('Error getting single book ', bookId);
                            }else {
                                if (recordset.length === 0) {
                                    res.status(404).send('not found');
                                }else {
                                    req.book = recordset[0];
                                    next();
                                }
                            }
                        });
                }
            });
        })
        .get(function (req, res) {
            var model = generateBaseModel();
            model.title += ' | Single Book' + req.book.bookId;
            model.book = req.book;
            res.render('books/bookView', model);
        });

    return bookRouter;
};