(function(data){
    var mock = require("./users.mock");
    data.getUsers = function(next){
    
        next(null, mock.initialInformation);
    };

})(module.exports);
