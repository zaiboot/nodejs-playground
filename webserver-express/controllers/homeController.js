(function(homeController){

    homeController.init = function (app, data) {
      app.get("/", function(req, res){
          res.send("test");
//        data.getUsers(function(err, data){
//        res.send(data)
          res.end();
//            });
        });
    };

})(module.exports);
