// 2-Destructuring Arrays Part 2
let mySkills = ["HTML", "CSS", ["JS", "React", ["Node", "Express"]]];
let [, , [, , [backend]]] = mySkills;
console.log(backend);
/////////////////////////////////////////////////////////////

// 3-Destructuring Arrays Part 3 Swap Variables
let mainSkill = "CSS";
let secondarySkill = "JavaScript";

[mainSkill, secondarySkill] = [secondarySkill, mainSkill];

console.log(mainSkill);
console.log(secondarySkill);
/////////////////////////////////////////////////////////////

// Destructuring Objects Part 1
// Destructuring Objects Part 2

console.log("***************************************");

// Destructuring Function Parameters
const member = {
  username: "Gannat",
  age: 20,
};

getMember(member);

function getMember({ username: u, age: a } = member) {
  console.log(`Member ${u} is${a} years old`);
}

console.log("***************************************");

// Destructuring Mixed Content
const student = {
  title: "Gannat",
  marks: [90, 95, 100],
  country: { code: "EG", city: "Cairo" },
};
const {
  title: t,
  marks: [, , m],
  country: { city: c },
} = student;

console.log(t);
console.log(m);
console.log(c);

console.log("***************************************");

// Destructuring Challenge
/*
  Destructuring
  - Challenge
*/

let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

const {
  title: T,
  age: A,
  skills: [, S],
  available: a,
} = myFriends[chosen - 1];

console.log(`${T}
    ${A}
    ${a ? "Available" : "Not Available"}
    ${S}`);
