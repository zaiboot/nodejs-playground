var msgs = require("./msgs.js");
printMessage(msgs.first);
printMessage(msgs.second);
printMessage(msgs.newObject);

function printMessage( message ){
   console.log(message);
}
