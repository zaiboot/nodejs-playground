(function(userController){

    userController.init = function(app){
        app.get("/api/users", function(req, res){

        var users = [
            {name: "zaiboot",  isValid: true, group:"Admin", today: new Date() },
            {name: "quincho",  isValid: true, group:"Millonario", today: new Date() }
         ];
         res.send(users);
        });
    };

})(module.exports);


