var sql = require('mssql');

var config = {
    server: 'localhost',
    database: 'Library',
    user: 'sa',
    password: 'Trintech1'
    // options: {
    //     trustedConnection: true
    // }
};

sql.connect(config, function (err) {
    if (err) {
        console.log('error:', err);
    }
});