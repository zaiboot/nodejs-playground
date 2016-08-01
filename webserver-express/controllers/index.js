(function( controllers ){
     
   var homeController = require("./homeController"); //no .js extension require, we can ommit it 
  // var userController = require("./userController");

   controllers.init = function(app){
       homeController.init(app);
//       userController.init(app);
   };
   
    
})(module.exports);
