// Event Simulation – Click, Focus, Blur
let input = document.querySelector("#user");
let btn = document.querySelector("#btn");

window.onload = function () {
  input.focus();
};

input.onblur = function () {
  btn.click();
};

btn.onclick = function () {
  document.body.style.background = "pink";
};
//////////////////////////////////////////////////////////////////////////////

// ClassList Object and Methods
// - classList
// --- length
// --- contains
// --- item(index)
// --- add
// --- remove
// --- toggle --> If it exists = remove / if not = stays

let btn1 = document.querySelector("#like-btn");
let heart = document.querySelector(".heart");
let text = document.querySelector(".text");

btn1.onclick = function () {
  // 1. toggle لتبديل كلاس active
  btn1.classList.toggle("active");

  // 2. contains  active دلوقتي ولا لأ؟
  if (btn1.classList.contains("active")) {
    heart.textContent = "❤️";
    text.textContent = " Added to fav";
    console.log("Classes now:", btn.classList.length);
  } else {
    heart.textContent = "🤍";
    text.textContent = "Add to fav";
  }
};

/////////////////////////////////////////////////////////

let pass = document.querySelector("#myInput");
let btn2 = document.querySelector("#toggleBtn");

btn2.onclick = function () {
  pass.classList.toggle("on");
  if (pass.classList.contains("on")) {
    pass.setAttribute("type", "text");
    btn2.textContent = "Hide";
  } else {
    pass.setAttribute("type", "password");
    btn2.textContent = "Show";
  }
};

///////////////////////////////////////////////////////////

// CSS Styling And Stylesheets
let textContent = document.querySelector("#textContent");
let change = document.querySelector(".colorText");
let clear = document.querySelector(".clearText");
let add = document.querySelector(".addPhoto");

change.onclick = function () {
  textContent.style.cssText = "color: red; font-size: 30px;";
};

clear.onclick = function () {
  textContent.style.removeProperty("font-size");
};

add.onclick = function () {
  textContent.style.setProperty("background-color", "yellow", "important");
};

/////////////////////////////////////////////////////

// Before, After, Prepend, Append, Remove
let ul = document.querySelector("ul");
let sec = document.querySelector("#sec");

let prependEle = document.createElement("li");
prependEle.textContent = "first";

let afterEle = document.createElement("p");
afterEle.textContent = "out the ul";

ul.prepend(prependEle);
ul.after(afterEle);

//////////////////////////////////////////////////////

// DOM Traversing
let start = document.querySelector("#start");

start.nextElementSibling.style.setProperty("color", "red");
start.parentElement.style.setProperty("background-color", "grey");

console.log(start);

/////////////////////////////////////////////////////

// DOM Cloning
let clone = document.querySelector("#text")
let copy =  clone.cloneNode(true)

clone.after(copy)

////////////////////////////////////////////////////

// addEventListener
// element.addEventListener("اسم_الـEvent", Function, options);
