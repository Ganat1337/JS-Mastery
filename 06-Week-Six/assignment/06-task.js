// task 1

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(num - num, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = 3;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

console.log("***********************");
// task 2

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]

console.log("***********************");
// task 3

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

console.log("***********************");
// task 4

let website = "Go";
let twice = 2;
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[twice][0].slice(twice).toUpperCase()); // ZERO

console.log("***********************");
// task 5

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
found = true;
haystack.indexOf(needle);
haystack.lastIndexOf(needle) !== -1;
haystack.indexOf(needle) !== -1;

console.log("***********************");
// task 6

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = (arr2[2] + arr1[2] + arr2[3]).toLowerCase();
console.log(allArrs); // fxy
