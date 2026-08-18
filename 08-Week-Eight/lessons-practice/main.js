// Function Intro And Basic Usage
function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}
generateYears(1, 18, 8);

console.log("*************************");

function calc(...numbers) {
  //Array
  // console.log(Array.isArray(numbers));
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]; // result = result + numbers[i]
  }
  return `Final Result Is ${result}`;
}

console.log(calc(10, 20, 10, 30, 50, 30));

console.log("*************************");
/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(a, b, c) {
  let name, age, status;

  typeof a === "string"
    ? (name = a)
    : typeof a === "number"
      ? (age = a)
      : typeof a === "boolean"
        ? (status = a)
        : null;
  typeof b === "string"
    ? (name = b)
    : typeof b === "number"
      ? (age = b)
      : typeof b === "boolean"
        ? (status = b)
        : null;
  typeof c === "string"
    ? (name = c)
    : typeof c === "number"
      ? (age = c)
      : typeof c === "boolean"
        ? (status = c)
        : null;

  let statusText = status
    ? "You Are Available For Hire"
    : "You Are Not Available For Hire";

  document.write(`<p>Hello ${name}, Your Age Is ${age}, ${statusText}</p>`);
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
