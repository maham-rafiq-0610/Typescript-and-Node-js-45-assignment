"use strict";
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// version 1
// define variables
let alienColor1 = "red";
// using if and else if statement
if (alienColor1 === "green") {
    console.log("you shot down green alien you have earned 5 points.");
}
else if (alienColor1 === "yellow") {
    console.log("you shot down yellow alien you have earned 10 points");
}
else if (alienColor1 === "red") {
    console.log("(version 1) you shot down red alien you have earned 15 points");
}
// version 2
let alienColor2 = "blue";
if (alienColor2 === "yellow") {
    console.log("you shot down red alien you have earned 5 points");
}
else if (alienColor2 === "blue") {
    console.log("(version 2) you shot down blue alien you have earned 10 points");
}
else if (alienColor2 === "black") {
    console.log("you shot down black alien you have earned 15 points");
}
// version 3
let alienColor3 = "white";
if (alienColor3 === "yellow") {
    console.log("you shot down red alien you have earned 5 points");
}
else if (alienColor3 === "") {
    console.log("you shot down red alien you have earned 10 points");
}
else if (alienColor3 === "white") {
    console.log("(version 3) you shot down black alien you have earned 15 points");
}
