// Create an application with following roles.
// admin - gets full access
// subadmin - gets access to create/delete courses
// testpreps - gets access to create/delete tests.
// user - gets access to consume content.

var user = "admin";

switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("gets access to create/delete courses");
        break;
    case "testpreps":
        console.log("gets access to create/delete tests.");
        break;
    case "user":
        console.log("gets access to consume content.");
        break;

    default:
        console.log("Trial User");
        break;
}