// task-1
let font = document.querySelector("#font");
let color = document.querySelector("#color");
let size = document.querySelector("#size");
let text = document.querySelector("#text");

if (localStorage.getItem("font")) {
  text.style.fontFamily = localStorage.getItem("font");
  font.value = localStorage.getItem("font");
}

if (localStorage.getItem("color")) {
  text.style.color = localStorage.getItem("color");
  color.value = localStorage.getItem("color");
}

if (localStorage.getItem("size")) {
  text.style.fontSize = localStorage.getItem("size");
  size.value = localStorage.getItem("size");
}

font.onchange = function () {
  text.style.fontFamily = this.value;
  localStorage.setItem("font", this.value);
};

color.onchange = function () {
  text.style.color = this.value;
  localStorage.setItem("color", this.value);
};

size.onchange = function () {
  text.style.fontSize = this.value;
  localStorage.setItem("size", this.value);
};

// task-2
