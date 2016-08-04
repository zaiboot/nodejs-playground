//database.js
(function(database){

    var mongodb = require("mongodb");
    var mongoUrl = "mongodb://localhost:27017/theBoard";
    var theDb = null;

    database.getDb = function(next){
        if (!theDb) {
            mongodb.MongoClient.connect(mongoUrl, function(err, db){

                if (err){
                    next(err, null);
                }else{

                    theDb = {
                        db: db,
                        users: db.collection("users") // it autogenerates the "table" or collection
                    };

                    next(null, theDb);    
                }


            });

        }else{
             
            next(null, theDb);
        }
    };



})(module.exports);
