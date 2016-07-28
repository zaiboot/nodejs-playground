//hello.js
console.log("hello world");

var x = {
    name: "hello",
    birthplace:"world"

};

console.log(x.name,x.birthplace);
//vs
console.log(x.name, '', x.birthplace); //notice the extra space
