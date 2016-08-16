(function(dataMongo){
    var database = require("./database");

    dataMongo.getUsers = function(next){
        database.getDb(function (err, db){
            if (err){
                next(err, null);

            }else{
                db.users.find().toArray(function(err, results){
                    if (err){
                        next(err, null);
                    }else{
                        next(null, results);    
                    }
                });
            }
        });
        
    };


    function seedDatabase(){
        
        console.log("Seeding database");

        database.getDb( function (err, db){

          if (err) {
            console.log("Failed to seed database: ", err);
          }else{
           // test about existing existing
            db.users.count(function(err, count) {
               if (err) {                   
                console.log("Failed to seed database: ", err);
                   
               }else{
                   if (count ==0 ){
                    var initialData = [                    
                        {name: "zaiboot",  isValid: true, group:"Admin", today: new Date() },
                        {name: "Quincho",  isValid: true, group:"Millonario", today: new Date() },
                        {name: "chino",  isValid: true, group:"wata", today: new Date() }
                    ];

                    initialData.forEach(function(item){
                        console.log("Inserting new item = ", item);
                        db.users.insert(item, function(err) {
                            if (err) console.log("An error while inserting ",item, " == ", err);
                        });
                    });

                  console.log("User document initialized correctly");

                       
                   }else{
                    console.log("User document already seeeded.");                       
                   }

              }
            });

          }
          
      });  
    };

    seedDatabase();
    
})(module.exports);
