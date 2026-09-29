// Regular Expression – Ranges
let myText =
  "My name is Gannat, I am 18 years old. I love JS and Elzero Web School!";

let allNum = /[0-9]/g;
console.log(myText.match(allNum));

let capital = /[A-Z]/g;
console.log(myText.match(capital));

let js = /[^js]/gi
console.log(myText.match(js));
console.log("*******************************");

let user1 = "Gannat";
let user2 = "Gannat123";
let user3 = "Gannat_2026";

let valid = /[a-zA-z]/g

console.log(user1.match(valid).length === user1.length);
console.log(user2.match(valid).length === user2.length);
console.log(user3.match(valid).length === user3.length);
