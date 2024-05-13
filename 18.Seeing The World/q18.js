"use strict";
// // Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
Object.defineProperty(exports, "__esModule", { value: true });
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// making array of country and print its original condition
let countriesToVisit = ["China", "Dubai", "Brazil", "Afghanistan"];
console.log("Original order", countriesToVisit);
// print thr array in alphabetical order without modify th actual array list
console.log("Alphabetical Order:", [...countriesToVisit].sort());
// show that the array is still in its original condition
console.log("still in original order:", countriesToVisit);
// print the array in reverse order without modify the actuat array list
console.log("Reverse Order:", [...countriesToVisit].reverse());
// show that the array is still in its original condition
console.log("still in original order:", countriesToVisit);
// we have change the org order now
console.log("original Array reverse:", countriesToVisit.reverse());
// print the array to show that it's back to its org order
console.log("back to original order:", countriesToVisit.reverse());
// print thr array to show that its order has been changed in alphabetical order now
console.log("sorted in alphabetical order:", countriesToVisit.sort());
// we have change again the original array order now in reverse order again
console.log("original Array reverse again:", countriesToVisit.reverse());
