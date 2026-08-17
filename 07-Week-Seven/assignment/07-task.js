// task 1

let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += 10) {
  if (i === exclude) continue;
  console.log(i);
}

// task 5

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter = 1;

for (let i = 0; i < friends.length; i++) {
  if (friends[i][0] === "A") {
    continue;
  }
  console.log(`${counter} => ${friends[i]}`);
  counter++;
}

// Output
("1 => Sayed");
("2 => Eman");
("3 => Mahmoud");
("4 => Osama");
("5 => Sameh");
