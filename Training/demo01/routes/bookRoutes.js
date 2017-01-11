module.exports = function (options) {
    var bookRouter = options.express.Router();
    var nav = options.nav;

    function generateBooks() {
        return [
            {title: 'Lord of the Rings', author: 'J.R.R Tolkien', id: 1, read: true, genre: 'Fantasy'},
            {title: 'Carrie', author: 'Stephen King', id: 2, read: false, genre: 'Horror'},
            {title: 'La Casa de los Espiritus', author: 'Isabel Allende', id: 3, read: false, genre: 'Romanticism'}
        ];

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
            model = Object.assign({books: generateBooks()}, model);
            res.render('books/bookListView', model);
        });

    bookRouter.route('/single/:bookid')
        .get(function (req, res) {

            var bookId = parseInt(req.params.bookid);
            var model = generateBaseModel();
            var books = generateBooks();
            //should return the 1st element matching the condition
            model.book = books.find(function (b) {
                return b.id === bookId;
            });
            model.title += ' | Single Book' + bookId;
            res.render('books/bookView', model);
        });

    return bookRouter;
};