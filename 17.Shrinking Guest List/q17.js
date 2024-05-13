"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
Object.defineProperty(exports, "__esModule", { value: true });
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// craeating a list of guestArray
let guestArray = ["Ayesha", "Khansa", "Maria"];
// making variable for those who cant come
let dontCome = guestArray[0];
// print name of person who cant come
console.log(dontCome, "not coming");
// print or remove value fromguest list array
guestArray.splice(0, 1, ("Anila"));
// message print for bigger table
console.log("Good News ! We have Found a Bigger Table For Dinner");
// adding a new guest at starting index of array
guestArray.unshift("sania");
// adding a new guest at ending index of array
guestArray.push("zara");
// adding a new guest at middle index of array
let middleIndex = Math.floor(guestArray.length / 2);
//Adding a new guest to middle index of array
guestArray.splice(middleIndex, 0, "saira");
// print message of updated list
console.log("updated list of our guest");
// sending a invitation message to our guests one by one with their names
guestArray.forEach(oneguest => console.log(`hello ${oneguest}, would you like to dinner with me?`));
// inform that only two guest can be invited to dinner
console.log("unfortunately, the new dinner table wont arrive on time, so I can only invite two guests to dinner at me");
// using while loop to remove guest from array untill only two names remain
while (guestArray.length > 2) {
    let removedGuest = guestArray.pop();
    console.log(`sorry,${removedGuest} I cant invite you to dinner`);
}
// sending  a invitation to the last two guest on the list
console.log("Invitation to the last 2 guest");
guestArray.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));
// remove last two guest from the list
guestArray.pop();
guestArray.pop();
console.log("Empty list:", guestArray);
