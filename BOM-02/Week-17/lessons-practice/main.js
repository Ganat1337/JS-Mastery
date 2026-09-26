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
  ["Ahmed", "Editor"]
]);

userRole.set("Sayed","User")

userRole.delete("Ahmed")

console.log(userRole);

console.log(userRole.size);
console.log("*************************");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

