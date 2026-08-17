// Practice – Add Products To Page

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors = ["Red", "Green", "Blue"];
let count = 3;

document.write(`<h1>We have ${count} products</h1>`);

for (let i = 0; i < count; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);

  for (let j = 0; j < colors.length; j++) {
    document.write(`<p>- ${colors[j]}</p>`);
  }

  document.write(`</div>`);
}
document.write(`<hr>`);

// Loop Challenge

let myAdmins = ["Ahmed", "Osama", "Sayed"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

document.write(`<div>We Have ${myAdmins.length} Admins</div>`);
document.write(`<hr>`);

for (let i = 0; i < myAdmins.length; i++) {
  document.write(`The Admin For Team ${i + 1} Is ${myAdmins[i]}`);
  document.write(`<h1>Team Members: </h1>`);
  document.write(`<hr>`);
  let count = 1;
  for (let j = 0; j < myEmployees.length; j++) {
    if (myAdmins[i][0] === myEmployees[j][0]) {
      document.write(`<p>- ${count} ${myEmployees[j]} </p>`);
      count++;
    }
  }
  document.write(`<hr>`);
}
