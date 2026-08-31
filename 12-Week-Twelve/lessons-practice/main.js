// What Is DOM ? And Select Elements
let mainTitle = document.getElementById("title");
let pageDescription = document.querySelector(".description");
let myLink = document.links[0];
let changeBtn = document.getElementById("btn");

changeBtn.onclick = function () {
  mainTitle.textContent = "Welcome Gannat!!";
  pageDescription.style.color = "Red";
  myLink.href = "https://github.com/Ganat1337";
  myLink.textContent = "Git Hub";
};
console.log("***********************************");

let myElement = document.querySelector(".js");

myElement.textContent = "Text From <span>Main.js</span> File";
myElement.innerHTML = "Text From <span>Main.js</span> File";

console.log("***********************************");

// Get, Set Elements Content And Attributes
let phoneImage = document.querySelector("#product-img");
let buyButton = document.querySelector("#buy-btn");

phoneImage.src = "white-phone.jpg";
phoneImage.alt = "White phone";

buyButton.href = "https://site.com/buy-white";

console.log("***********************************");
console.log(phoneImage.getAttribute("src"));
//(الخاصية القديمة , الخاصية الجديدة)
phoneImage.setAttribute("src", "white-phone.jpg");
phoneImage.setAttribute("alt", "White Phone");

buyButton.setAttribute("href", "https://site.com/buy-white");
console.log("***********************************");

// Check Attributes And Examples
let submit = document.querySelector("#btn2");
if (submit.hasAttribute("disabled")) submit.removeAttribute("disabled");
console.log("***********************************");

// Create And Append Elements
let element = document.createElement("h1")
let Textele = document.createTextNode("Hello, I am Gannat")

element.appendChild(Textele)
document.body.appendChild(element)

console.log("***********************************");

// Product With Heading And Paragraph Practice

// for(let i = 1; i<=100; i++){} to creat 100 product 

let somThing = document.createElement("div")
let text = document.createElement("h3")
let textContent = document.createTextNode(`Product Title :`)
let Paragraph = document.createElement("P")
let textContentP = document.createTextNode("This is Paragraph Description")

// class
somThing.className = "Product"

// h3-->text
text.appendChild(textContent)
somThing.appendChild(text)

// p-->Paragraph
Paragraph.appendChild(textContentP)
somThing.appendChild(Paragraph)

document.body.appendChild(somThing)
console.log("***********************************");

let childTest = document.querySelector("#container")

console.log(childTest.firstElementChild.textContent)
console.log(childTest.lastElementChild.textContent)
console.log(childTest.firstChild)
console.log(childTest.lastChild)
console.log(childTest.children)
console.log(childTest.children[1])
console.log(childTest.childNodes)
console.log(childTest.childNodes[0])

console.log(childTest)
console.log("***********************************");
