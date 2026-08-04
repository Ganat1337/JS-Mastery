                                    // task 1

// Replace ? With Arithmetic Operators
console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0 
console.log("**************************");
                                    // task 2

let num = 3;


// Solution One
console.log( num + num); // 6

// Solution Two
console.log(+num + +num); // 6

// Soultion Three
console.log(num - -num); // 6

// Soultion Four
console.log(num * true + num); // 6

// Solution Five
console.log(num * (true + true)); // 6

// Solution Six
console.log(num * !!num + num); // 6       
console.log(num++ + --num); // 6       
console.log("**************************");

                                    // task 3

let num2 = "10";

// Solution One
console.log(+num2 + +num2); // 20

// Solution Two
console.log(num2 * (!!num2 + !!num2)); // 20

// Solution Three
console.log(num2++ + --num2); // 20

// Solution Four
console.log(Number(num2) + Number(num2)); // 20
console.log("**************************");

                                    // task 4
let points = 10;

points += 3;
console.log(points); // 13

points -= 5;
console.log(points); // 8;
console.log("**************************");

                                    // Operators Challenges
/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
Line 1: console.log(++a + +b++ + +c++ - +a++);

  [++a]
  - Value:  11 
  - Explain: Pre-increment
  [+]
  - Explain: Arithmetic Operator
  [+b++]
  - Value: 20
  - Explain: Unary Plus , Post-increment 
*/

/*
  Challenge 2
*/
console.log("**************************");

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(e * -d); // 2000
console.log(++e * ++g + -d + f); // 173                                    