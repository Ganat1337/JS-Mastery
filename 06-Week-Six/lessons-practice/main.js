//0-Array Big Introduction

let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];
console.log(`Hello ${myFriends[3][1]}`); // Accsess Array+Element

myFriends[1] = "Gannat"; // Edit Array
console.log(myFriends);

console.log(Array.isArray(myFriends)); // true

//1-Using Length With Array
console.log("******************************");

// length --> start from 1
// index -->  0

// لو طول المصفوفة 3 ف اخر عنصر هيكون رقم 2
//Last Index = length - 1
//myFriends[myFriends.length] = "Ganat"; "Add new element"
// myFriends.length = 3 بنقص من المصفوفة
console.log("******************************");

//2-Add And Remove From Array

myFriends.unshift("Osama", "Nabil"); //Add at fisrt

console.log(myFriends);

myFriends.push("Samah", "Eman"); // Add at in the End

console.log(myFriends);

let first = myFriends.shift(); // remove first ellement

console.log(myFriends);

let last = myFriends.pop(); // remove last element

console.log(myFriends);

console.log("******************************");

// Searching Array

console.log(myFriends.indexOf("Gannat")); // start to end
console.log(myFriends.lastIndexOf("Gannat", -1)); // End to start
console.log(myFriends.includes("Gannat")); // Boolean

console.log("******************************");

// Sorting Array

myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

console.log(myFriends);

console.log(myFriends.sort().reverse());
// sort --> Alphapet
console.log("******************************");

// Slicing Array

myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];

console.log(myFriends.slice());
console.log(myFriends.slice(1));
//  slice --> not including end
//            return new array

myFriends.splice(1, 2, "Sameer", "Samara"); //(start , delete , elements)
console.log(myFriends);
console.log("******************************");

// Joining Arrays

myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends.concat(
  myNewFriends,
  schoolFriends,
  "Gameel",
  [1, 2],
); // add and gether

console.log(allFriends);

console.log(allFriends.join()); // Default: seperate by ,
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
console.log(allFriends.join("|"));
console.log(allFriends.join("|").toUpperCase());

console.log("******************************");
/*
  Array Challenge
*/

let zero = 0;
let counter = 3;
let twice = 2;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my = my.slice(zero, counter + true).reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"]

my = my.slice(true, counter);
console.log(my); // ["Elham", "Mazero"]

my = my[zero].slice(zero, twice) + my[counter - twice].slice(twice);
console.log(my);
// "Elzero"

console.log(my[counter + true] + my[counter + twice].toUpperCase()); // "rO"
