module.exports = function(){
 
    var privateProp = "private prop";
 
    this.publicProp = "public prop";

    this.GetPrivateProp = function(){
        return privateProp;
    };

    this.SetPrivateProp = function(value) {
        privateProp = value;
    };

};

