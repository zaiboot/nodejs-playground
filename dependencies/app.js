var msgs = require("./msgs.js");
var funciones = require("./funciones.js")

printMessage(msgs.first);
printMessage(msgs.second);
printMessage(msgs.newObject);


printMessage( funciones() );

var simpleObject = require("./simpleObject.js")
var simpleInstance = new simpleObject();

printMessage( simpleInstance.publicProp );

var oldValue = simpleInstance.GetPrivateProp();

simpleInstance.SetPrivateProp("Goku");

console.log("old value = ", oldValue, " newValue =", simpleInstance.GetPrivateProp());


// como se puede ver, el archivo se lee completo y se interpreta despues. 
//Funciones al fina para evitar el desorden
function printMessage( message ){
   console.log(message);
}


