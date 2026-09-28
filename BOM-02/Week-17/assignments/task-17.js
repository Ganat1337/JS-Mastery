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
console.log("***************************");
///////////////////////////////////////////////////////////////////////////////

// task-4
let theNumber = 100020003000;
console.log(+Array.from(new Set([...theNumber.toString()])).filter((e) => +e).join(""));
console.log("***************************");
///////////////////////////////////////////////////////////////////////////////

// task-5
let theName = "Elzero";
console.log(Array.from(theName));
console.log([...theName]);
console.log([...new Set(theName)]);
console.log(theName.split(""));
console.log(Object.values(theName));
console.log(Array.prototype.slice.call(theName));
console.log(Object.assign([],theName));
// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
console.log("***************************");
///////////////////////////////////////////////////////////////////////////////

// task-6
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
console.log(chars.copyWithin(1,5,8));
console.log("***************************");

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
///////////////////////////////////////////////////////////////////////////////

// task-7
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne,...numsTwo]);
console.log(Array.from([...numsOne,...numsTwo]));
console.log(new Set([numsOne.toString()]));
// Needed Output
[1, 2, 3, 4, 5, 6]
console.log("***************************");
///////////////////////////////////////////////////////////////////////////////
