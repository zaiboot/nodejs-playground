var sql = require('mssql');

var config = {
    server: '(local)',
    database: 'Library',
    options: {
        trustedConnection: true
    }
};

sql.connect(config, function(err) {
        console.log('error:', err);
    });