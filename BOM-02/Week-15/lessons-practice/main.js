// 1-Local Storage
if(localStorage.getItem("theme")){
    document.body.style.backgroundColor = "black"
    }
else localStorage.setItem("theme","dark")

//////////////////////////////////////////////////////

// 2-Local Storage Color App Practice
let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color") && window.localStorage.getItem("fontSize") ) {
  // If There Is Color In Local Storage
  // [1] Add Color To Div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  // Add Font to div
  exp.style.fontSize = window.localStorage.getItem("fontSize")
  // [2] Remove Active Class From All Lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] Add Active Class To Current Color
  document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);
    // Remove Active Class From all Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Active Class To Current Element
    e.currentTarget.classList.add("active");
    // Add Current Color To Local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // Add Current Font To Local Storage
    window.localStorage.setItem("fontSize", "30px")
    // Change Div Background Color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});

/////////////////////////////////////////////////////////////////

// 3-Session Storage And Use Cases
let input = document.querySelector("input-field")

if(window.sessionStorage.getItem("userText"))
{ input.value = window.sessionStorage.getItem("userText") }

input.oninput = function(){
    window.sessionStorage.setItem("userText" , this.value)
}
