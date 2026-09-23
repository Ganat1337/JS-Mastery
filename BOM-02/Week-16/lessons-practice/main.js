// 2-Destructuring Arrays Part 2
let mySkills = ["HTML", "CSS", ["JS", "React", ["Node", "Express"]]];
let [, , [, , [backend]]] = mySkills
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