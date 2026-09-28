//1- Set Data Type And Methods
let userSkills = ["HTML", "CSS", "HTML", "JS", "CSS"];
console.log(userSkills);

let skilsSet = new Set(userSkills);

console.log(skilsSet.has("JS"));

console.log(skilsSet.size);
console.log("*************************");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2-Set vs WeakSet And Garbage Collector

//3- Map Data Type vs Object
let testMap = new Map();

testMap.set(true, "Yes");
testMap.set("true", "No");

console.log(testMap.get(true));

console.log(testMap.size);
console.log("*************************");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4-Map Methods
let userRole = new Map([
  ["Gannat", "Admin"],
  ["Ahmed", "Editor"],
]);

userRole.set("Sayed", "User");

userRole.delete("Ahmed");

console.log(userRole);

console.log(userRole.size);
console.log("*************************");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6-Array.from Method
let strNumbers = "12345";

let arr = Array.from(strNumbers, (n) => +n * +n);

console.log(arr);
console.log("*************************");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7-Array.copyWithin Method
// not include end 
let nums = [1, 2, 3, 4, 5];
nums.copyWithin(0, 2, 4); // 3 4 3 4 5
console.log(nums);
console.log("*************************");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8-Array.some Method
let ages = [12, 14, 16, 17, 18];
let adult = 18
let check = ages.some( (ages) => ages>= adult)
console.log(check);
console.log("*************************");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9- Array.every Method
let prices = [100, 250, 400, 800, 50];
let budget = 500;

let checkBudget = prices.every( (e)=> budget >= e )
console.log(checkBudget);
console.log("*************************");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10-Spread Syntax And Use Cases
let frontend = ["HTML", "CSS", "JS"];
let backend = ["Node.js", "Python"];

let fullStack = [...frontend,"Git",...backend ]
console.log(fullStack);
console.log("*************************");
