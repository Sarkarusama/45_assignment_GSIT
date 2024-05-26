"use strict";
// 31. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let usrName = ["Admin", "Eric", "Tony", "Elon Mask", "Ambani"];
if (usrName.length === 0) {
    console.log(`We need to find some user`);
}
else {
    usrName = [];
    console.log(`All user are removed from the arry. ` + usrName.length);
}
