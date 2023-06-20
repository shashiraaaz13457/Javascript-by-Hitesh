// TODO: falsy values
// undefined
// var user;
// console.log(user);

// null
// 0
// ''
// NaN

var user = null;
// It is falsy value so it didn't run because we put true value inside the if statement.

if(user){
    console.log("Condition is true");
}

var user = "";

if(user){
    console.log("Condition is true");
}

// Everything apart from falsy is truthy values.

console.log("2" + 2);
// It gives 22 because it assumes both a string.

var num = "2";

if(2 == num) {
    console.log("Condition is true");
}

// Type Coercion- Javascript don't assume automatically so we use ===.(Strict Checking) 
if(2 === num) {
    console.log("Condition is true");
}