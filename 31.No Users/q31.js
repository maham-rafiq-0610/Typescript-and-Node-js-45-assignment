"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
Object.defineProperty(exports, "__esModule", { value: true });
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let userNames = ["Maham", "Anila", "Admin", "Anabia"];
userNames = [];
if (userNames.length === 0) {
    console.log("your array is empty we need to find some users!");
}
else {
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser} would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thank you logging in again.`);
        }
    });
}
