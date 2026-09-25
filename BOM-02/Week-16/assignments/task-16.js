// task-1
let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
const [a, , , , e] = myNumbers
console.log(a * e); // 5
console.log("**********************************");
////////////////////////////////////////////////

// task-2
let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here

const [ A,b,c,[d,E,[f,g]]  ] = mySkills

console.log(`My Skills: ${A}, ${b}, ${c}, ${d}, ${E}, ${f}, ${g}`);
console.log("**********************************");

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
////////////////////////////////////////////////

// task-3
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];
// Play With Arrays To Prepare For Destructuring

// Write Your Destructuring Assignment Here
let [[, x, y], [z]] = [arr3, arr1];

console.log(`My Best Friends: ${x}, ${y}, ${z}`);
console.log("**********************************");
// My Best Friends: Shady, Mahmoud, Ahmed
////////////////////////////////////////////////

// task-4
const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here

const{
    age:l,
    working:w,
    country:k,
    hobbies:[h1, ,h3]
} = member

console.log(`My Age Is ${l} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${k}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
console.log("**********************************");

// My Hobbies: Reading And Programming
////////////////////////////////////////////////


