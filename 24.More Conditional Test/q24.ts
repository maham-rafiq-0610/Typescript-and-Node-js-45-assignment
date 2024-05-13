// // More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// // • Tests for equality and inequality with strings

// // • Tests using the lower case function

// // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// // • Tests using "and" and "or" operators

// • Test whether an item is in a array

// // • Test whether an item is not in a array

// // Define variables
let apple = "apple";
let upperCaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];

// // test for equality and unequality with string

console.log("Is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");

// // test using lowercase function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase() != "apple");

// numerical tests
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);

console.log("\nIs ten is not equal to twenty? ");
console.log(ten != twenty);

console.log("\n Is ten is greater than 0?");
console.log(ten > 0);

console.log("\nIs twenty is less than 10?");
console.log(twenty < 10);

console.log("\nTs ten is greater than or equal to 5?");
console.log(ten >= 5);

console.log("\n twenty is less than or equal to 10?");
console.log(twenty <= 10);

// test using "and" & "or" operators

// using && (and)
console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);

// using || (or);
console.log("\n 20 is greater than 50 OR 20 is equals to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is greater than 50 OR 20 is equals to 20");
console.log(20 > 50 || 20 != 20);

// test whether an item is included in array
console.log("\n Is orange include in my fruits array ");
console.log(fruits.includes("orange"));

console.log("\n Is orange not include in my fruits array ");
console.log(fruits.includes("orange"));
