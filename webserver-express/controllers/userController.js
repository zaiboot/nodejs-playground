(function(userController){

    userController.init = function(app, data){
        
        var dal = data;

        app.get("/api/users", function(req, res){

            data.getUsers(function(err, results){ 
               if (err) {
                res.send(err);
               }else{
                res.send(results);
               }
            });

        });
    };

})(module.exports);


