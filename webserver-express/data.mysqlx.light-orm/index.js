(function(data){



//    var mock = require("./users.mock");
//    data.getUsers = function(next){    
//        next(null, mock.initialInformation);
//    };

var mysqlx = require('mysqlx'),
    lightOrm = require('light-orm');


    data.getUsers = function(next){
        
        lightOrm.driver = mysql.createConnection(require('./connection.json'));
        lightOrm.driver.connect();
        
        //fetch data
        var userCollection = new lightOrm.Collection('User');
        //undefined = no filter at all.
        userCollection.find(undefined, function(err, models){
            // handle errors better
            if (err) {
                console.log("se desmadro", err);
                next(err, []);
                return;
            }

            console.log(models[0]);
            var information = [];

            for( var i = 0; i< models.length; i++){
                var singleModel = models[0].getAll();
                information.push(singleModel);
            }
            information = models;
            next(null, information);
        });

        //close connection
        lightOrm.driver.end();
    };

})(module.exports);
