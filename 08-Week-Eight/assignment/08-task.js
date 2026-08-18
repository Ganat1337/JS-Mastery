// task 1

function sayHello(theName, theGender) {
  // Your Code Here
  if (theGender === "Male") console.log(`Hello Mr ${theName} `);
  else if (theGender === "Female") console.log(`Hello Miss ${theName} `);
  else console.log(`Hello ${theName} `);
  return (theName, theGender);
}

// Needed Output
sayHello("Gannat", "Female");
sayHello("Ahmed", "Male");
sayHello("Ibrahim");

console.log("*************************");

// task 2

function calculate(firstNum, secondNum, operation) {
  // Your Code Here
  if (secondNum === undefined) {
    console.log(`Second Number Not Found`);
    return;
  }
  if (operation === "add" || operation === undefined) {
    console.log(firstNum + secondNum);
  } else if (operation === "subtract") {
    console.log(firstNum - secondNum);
  } else console.log(firstNum * secondNum);
  return (firstNum, secondNum, operation);
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

// task 5

function createSelectBox(startYear, endYear) {
  // Your Code Here
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}"> ${i} </option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

console.log("*************************");

// task 6
function multiply(...number) {
  let result = 1;
  for (let i = 0; i < number.length; i++) {
    if (typeof number[i] === "string") {
      continue;
    }
    result *= number[i];
  }
  console.log(result);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
