// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// craeating a list of guestArray
let guestArray = ["Ayesha", "Khansa", "Maria"];

// making variable for those who cant come
let dontCome = guestArray[0];
// print name of person who cant come
console.log(dontCome, "not coming");

// print or remove value fromguest list array

guestArray.splice(0, 1, ("Anila"));

// message print for bigger table
console.log("Good News ! We have Found a Bigger Table For Dinner")

// adding a new guest at starting index of array
guestArray.unshift("sania");

// adding a new guest at ending index of array
guestArray.push("zara");

// adding a new guest at middle index of array
let middleIndex: number =Math.floor (guestArray.length / 2);

//Adding a new guest to middle index of array
guestArray.splice(middleIndex, 0, "saira");

// print message of updated list
console.log("updated list of our guest");
// sending a invitation message to our guests one by one with their names
guestArray.forEach(oneguest => console.log(`hello ${oneguest}, would you like to dinner with me?`));



