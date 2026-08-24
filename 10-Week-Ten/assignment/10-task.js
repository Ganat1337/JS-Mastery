// task 1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"]; // Elzero
let removeNum = mix
  .map((a) => (isNaN(a) ? a : ""))
  .reduce((acc, current) => `${acc}${current}`);

console.log(removeNum);

console.log("***************************");

// task 2

let myString = "EElllzzzzzzzeroo";
let reapeat = myString
  .split("")
  .filter((ele, index, arr) => arr.indexOf(ele) === index)
  .reduce((acc, current) => `${acc}${current}`);
console.log(reapeat); // Elzero

console.log("***************************");

// task 3
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let solution = myArray.reduce(function (acc, current) {
  return acc.concat(current);
}, []);
console.log(solution);

let Result = myArray.reduce((acc, current) => acc.concat(current), []).join("");

console.log(Result); // Elzero

console.log("***************************");

// task 4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let nums = numsAndStrings
  .map((a) => (isNaN(a) ? "" : -a))
  .filter((a) => `${a}`);
console.log(nums); // [-1, -10, 10, 20, -5, -3]

console.log("***************************");

// task 5
let numbers = [2, 12, 11, 5, 10, 1, 99];
let finalResult = numbers.reduce((acc = 1, current) =>
  current % 2 == 0 ? acc * current : acc + current,
);
console.log(finalResult); // 500
