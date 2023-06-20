const uid = "abc123";

var fullName = "Shashi Raj";
var email = "shashiraj13457@gmail.com";
var password = "123456";
var confirmPassword = "123456";
var courseCount = 0;
var isLoggedInFromGoogle = false;

// This is the way you can take input from user in javascript.
// You can also use alert. 
// fullName = prompt("Enter your name");

console.log(uid);
console.log("Full Name is: "+ fullName);
console.log(email);

// The better way for doing the above part is using of backstrip.
//This method is Interpolation in the world of javascript.
console.log(`
    With Unique ID: ${uid}
    User is: ${fullName}
    and his email is: ${email}
    and uses the password: ${password}
`);