"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "maham rafiq";
// lowerCase
console.log(personName.toLowerCase());
// uppercase
console.log(personName.toUpperCase());
// tittleCase
console.log(personName.charAt(0).toUpperCase() + personName.slice(1, 10));
