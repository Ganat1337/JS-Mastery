// task-1
let setOfNumbers = new Set([10])

setOfNumbers.add(20)
setOfNumbers.add(setOfNumbers.size)

console.log(setOfNumbers);

console.log([...setOfNumbers].pop()); // change into array --> last index
console.log("***************************");
///////////////////////////////////////////////////////////////////////////////

// task-2
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let myS = new Set(myFriends.sort())

console.log(myS);

// Needed Output
(4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
console.log("***************************");
///////////////////////////////////////////////////////////////////////////////

// task-3
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let myMap = new Map()
myMap.set("username","Osama")
myMap.set("role","Admin")
myMap.set("country","Egypt")
console.log(myMap);
console.log(myMap.size);
console.log(myMap.has("username"));
