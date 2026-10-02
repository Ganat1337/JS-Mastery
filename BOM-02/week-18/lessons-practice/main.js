// Regular Expression – Ranges
let myText =
  "My name is Gannat, I am 18 years old. I love JS and Elzero Web School!";

let allNum = /[0-9]/g;
console.log(myText.match(allNum));

let capital = /[A-Z]/g;
console.log(myText.match(capital));

let js = /[^js]/gi;
console.log(myText.match(js));
console.log("*******************************");

let user1 = "Gannat";
let user2 = "Gannat123";
let user3 = "Gannat_2026";

let valid = /[a-zA-z]/g;

console.log(user1.match(valid).length === user1.length);
console.log(user2.match(valid).length === user2.length);
console.log(user3.match(valid).length === user3.length);
console.log("*******************************");

// Regular Expression – Character Classes
let str = "JS 2026!";
let dot = /./g;
let word = /\w/g;
let num = /\d/g; 

console.log(str.match(dot));
console.log(str.match(word));
console.log(str.match(num));
console.log("*******************************");
////////////////////////////////////////////////////////////////////////

let story = "I love JavaScript and Java programming";
let java = /(\bjava\b)/ig

console.log(story.match(java));
console.log("*******************************");
////////////////////////////////////////////////////////////////////////

// Regular Expression – Quantifiers

// +  ---> على الاقل مرة واحدة
// ? ---> يا اما موجود مرة واحده يا اما مش موجود خالص 
// * ---> موجود ب اي عدد او مش موجود عادي 
let text = "Color or Colour? Contact us at info@site.com or support123@domain.net!";

let regExPattern = /(color?)?(colou?r)/ig
console.log(text.match(regExPattern));
console.log("*******************************");
////////////////////////////////////////////////////////////////////////


// Regular Expression – Quantifiers Part 2
// d ---> digit "number"
// {} رقم او من رقم لرقم او فتره مفتوحة 
let users = "User1998 User2004 User95";

let regUser = /User\d{4}/ig
console.log(users.match(regUser));
console.log("*******************************");
////////////////////////////////////////////////////////////////////////

// Regular Expression – Quantifiers Part 3
  // $  => End With Something
  // ^  => Start With Something
  // ?= => Followed By Something
  // ?! => Not Followed By Something
  let prices = "Item1: 100$ Item2: 200LE Item3: 300$ Item4: 400EUR";

  let sign = /\d+(?=\$)/g
  console.log(prices.match(sign));

  let notSign = /\d+(?!\$)/g
  console.log(prices.match(notSign));
  console.log("*******************************");
////////////////////////////////////////////////////////////////////////

// replace 
// replace-all