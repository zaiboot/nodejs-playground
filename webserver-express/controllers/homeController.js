(function(homeController){

    homeController.init = function (app, data) {
        app.get("/", function(req, res){
            data.getUsers(function(err, data){
                res.send(data)
                res.end();
            });
        });
    };

})(module.exports);
