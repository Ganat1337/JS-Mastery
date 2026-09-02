// task 1

let id = document.querySelector("#elzero").textContent;
let element = document.querySelector(".element").textContent;
let name = document.querySelector("[name='js']").textContent;
let text = document.querySelector("div").textContent;

console.log(id);
console.log(element);
console.log(name);
console.log(text);

document.getElementById("elzero");
document.getElementsByClassName("element")[0];
document.getElementsByTagName("div")[0];
document.getElementsByName("js")[0];
document.body.firstElementChild;

console.log("****************************************");

// task 2
let images = document.querySelectorAll("img");

for (let i = 0; i < images.length; i++) {
  images[i].setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png",
  );
  images[i].setAttribute("alt", "Elzero Logo");
}

console.log("****************************************");

// task 3

let input = document.querySelector("input");
let output = document.querySelector(".result");

input.oninput = function () {
  let dollar = input.value;
  let egp = (dollar * 15.6).toFixed(2);
  output.textContent = `{${dollar}} USD Dollar = {${egp}} Egyptian Pound`;
};

console.log("****************************************");
// task 4

// task 5
let check = document.querySelectorAll("img");
for (let i = 0; i < check.length; i++) {
  if (check[i].alt !== "") {
    check[i].alt = "Old";
  } else {
    check[i].alt = "Elzero New";
  }
  console.log(check[i]);
}
console.log("***************************");
// task 6

let Elements = document.querySelector("[name='elements']");
let textContent = document.querySelector("[name='texts']");
let type = document.querySelector("[name='type']");
let btn = document.querySelector("[name='create']");
let final = document.querySelector(".results");

let secondForm = document.forms[1];

secondForm.onsubmit = function (e) {
  e.preventDefault();

  
  for (let i = 0; i < Elements.value; i++) {
  let myElement = document.createElement(type.value);
  myElement.textContent = textContent.value;
  myElement.className = "box";
  myElement.id = `id-${i + 1}`;
  final.appendChild(myElement);
}
};



