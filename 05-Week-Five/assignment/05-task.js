// Comparison & Logical Operators
// task 1

console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 === +"-10"); // true
console.log(!-50 === !+"-40"); // true
console.log(+10 < -"-40"); // true
console.log(+"10" >= 10); // true
console.log(Boolean(20) > false); // true
console.log("*****************************");

// task 2

let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(num1 != num2); // true
console.log(Boolean(num1) === Boolean(num2)); // true
console.log(typeof num1 === typeof num2); // true
console.log(num1 <= num2); // true
console.log(num2 > num1); // true
console.log("*****************************");

// task 3

let a = 20;
let b = 30;
let c = 10;

console.log((a < b && a > c) || a < b); // true
console.log(a < b && a > c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true
console.log("*****************************");

//  If Condition
// task 1

// Test Case 1
let num4 = 9; // "009"
if (num4 < 10) {
  console.log(`00${num4}`);
}
// Test Case 2
let num5 = 20; // "020"
if (num5 > 10 && num5 < 100) {
  console.log(`0${num5}`);
}
// Test Case 3
let num6 = 110; // "110"
if (num6 >= 100) {
  console.log(`${num6}`);
}

// task 2

let num = 9;
let str = "9";
let str2 = "20";

// Output
("{num} Is The Same Value As {str}");
("{num} Is The Same Value As {str} But Not The Same Type");
("{num} Is Not The Same Value Or The Same Type As {str2}");
("{str} Is The Same Type As {str2} But Not The Same Value");

if (num == str) {
  console.log(`${num} Is The Same Value As ${str}`);
}
if (num == str && num !== str) {
  console.log(`${num} Is The Same Value As ${str} But Not The Same Type`);
}
if (num != str2) {
  console.log(`${num} Is Not The Same Value Or The Same Type As ${str2}`);
}
if (typeof str === typeof str2 && str !== str2) {
  console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
}
