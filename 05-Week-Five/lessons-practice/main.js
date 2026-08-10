// Comparison Operators

console.log(-100 == "-100"); // Compare Value Only
console.log(10 != "10"); // Compare Value Only

console.log(10 === "10"); // Compare Value + Type
console.log(10 !== "10"); // Compare Value + Type
console.log("*****************************");

// if المختصرة

let theName = "Mona";
let theGender = "Male";
let theAge = 30;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

// Condition ? If True : If False

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

console.log("*****************************");

console.log(Boolean(100)); // True
console.log(Boolean(-100)); // True
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false

let price = 0;

console.log(`The Price Is ${price || 200}`); //200
console.log(`The Price Is ${price ?? 200}`); //0 "Nullish Coalescing"
console.log("*****************************");

/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax

a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
    ? console.log("10 To 40")
    : a > 40
      ? console.log("> 40")
      : console.log("Unknown");
console.log("*****************************");

let st = "Elzero Web School";

if ((st.length * 2).toString() === "34") {
  //legnth
  console.log("Good");
}
console.log("*****************************");

// W Position May Change
if (st.charAt(7).toLowerCase() === "w") {
  console.log("Good");
}
console.log("*****************************");

if (typeof st.length !== "string") {
  console.log("Good");
}
console.log("*****************************");

if (typeof st.length === "number") {
  console.log("Good");
}
console.log("*****************************");

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
console.log("*****************************");

/*
  Switch Challenge
*/

let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}
//answer:
switch (job) {
  case "Manager":
    salary = 8000;
    break;
  case "IT":
  case "Support":
    salary = 6000;
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    break;
  default:
    salary = 4000;
    break;
}

/*
  If Challenge
*/

let holidays = 4;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}
//answer:
if (holidays == 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays == 1 || holidays == 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays == 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
} else if (holidays == 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
} else if (holidays == 5) {
  money = 0;
  console.log(`My Money is ${money}`);
} else {
  money = 0;
  console.log(`My Money is ${money}`);
}
