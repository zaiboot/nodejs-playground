(function( controllers ){
   
   var data = require("../data.mongodb/");
   var homeController = require("./homeController"); //no .js extension require, we can ommit it 
   var userController = require("./userController");
   console.log('data - ', data);
   controllers.init = function(app){
      homeController.init(app, data);
      userController.init(app, data);
   };
   
    
})(module.exports);
