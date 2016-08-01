(function(homeController){

    var data = require("../data");
    homeController.init = function (app) {
        app.get("/", function(req, res){
            data.getUsers(function(err, data){
                res.send(data)
                res.end();
            });
        });
    };

})(module.exports);
