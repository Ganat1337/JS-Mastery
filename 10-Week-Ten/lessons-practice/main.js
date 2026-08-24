// Higher Order Functions – Map

// (Anonymous Function):
// let addSelf1 = myNums.map(function (element) {
//   return element + element;
// });

// (Arrow Function):
// let addSelf2 = myNums.map((a) => a + a);

// (Named Function):
// function addition(ele) {
//   return ele + ele;
// }
// let add = myNums.map(addition);

// old array --> element by element
//  --> excute function
//   --> return a new array with the same results

console.log("******************************");
// Higher Order Functions – Map Practice

let swappingCases = "elZERo";
// let sw = swappingCases.split("")
// .map(function (element) {
//   return element === element.toUpperCase()
//     ? element.toLowerCase()
//     : element.toUpperCase();
// }).join("");
// console.log(sw)

let sw = swappingCases
  .split("")
  .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
  .join("");
console.log(sw);
console.log("******************************");

let invertedNumbers = [1, -10, -20, 15, 100, -30];
let invert = invertedNumbers.map((a) => -a);
console.log(invert);

console.log("******************************");

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let filterString = mix
  .split("")
  .filter((a) => !isNaN(parseInt(a)))
  .map((a) => a * a)
  .join("");
console.log(filterString);

// Reduce-Longest Word
let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];

let check = theBiggest.reduce((acc, current) =>
  acc.length > current.lastIndexOf ? acc : current,
);
console.log(check);

console.log("******************************");

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let remove = removeChars
  .filter((a) => a !== "@")
  .reduce((acc, current) => `${acc}${current}`);
console.log(remove);

console.log("******************************");

let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allLis.forEach(function (ele) {
  ele.onclick = function () {
    // Remove Active Class From All Elements
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    // Add Active Class To This Element
    this.classList.add("active");
    // Hide All Divs
    allDivs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});


console.log("******************************");

/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split("").filter( (a) => isNaN(a) &&  a !== "," 
 ).filter( function (ele, index, arr){
 return index !== 0 && index !== arr.length - 1;
 }).map((ele) => (ele === "_" ? " " : ele)).join("");

console.log(solution); // Elzero Web School