(function( controllers ){
   
   var data = require("../data.mysql.light-orm/");
   var homeController = require("./homeController"); //no .js extension require, we can ommit it 
  // var userController = require("./userController");

   controllers.init = function(app){
       homeController.init(app, data);
//       userController.init(app);
   };
   
    
})(module.exports);
