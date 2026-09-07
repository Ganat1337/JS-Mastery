// task 1
window.onload = function () {
  let links = document.links;
  for (let i = 0; i < links.length; i++) {
    if (
      links[i].classList.contains("open") &&
      links[i].textContent === "Elzero"
    ) {
      //   links[i].click();
    }
  }
};
/////////////////////////////////////////

// task 2
// 1. Setup Elements
let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let current = document.querySelector(".element.current");
let show = document.querySelector(".classes-list div");

// 2. Function to Show and Sort Classes
let showClasses = function () {
  show.innerHTML = "";

  if (current.classList.length) {
    let sortedClasses = Array.from(current.classList).sort();

    for (let i = 0; i < sortedClasses.length; i++) {
      let newSpan = document.createElement("span");
      newSpan.textContent = sortedClasses[i];
      show.appendChild(newSpan);
    }
  } else {
    show.textContent = "No Classes To Show";
  }
};

// Run show function initially
showClasses();

// 3. Add Classes On Blur
add.onblur = function () {
  let val = add.value.toLowerCase().trim();

  if (val !== "") {
    let classesArray = val.split(" ");

    for (let i = 0; i < classesArray.length; i++) {
      if (classesArray[i] !== "") {
        current.classList.add(classesArray[i]);
      }
    }

    showClasses();
    add.value = "";
  }
};

// 4. Remove Classes On Blur
remove.onblur = function () {
  let val = remove.value.toLowerCase().trim();

  if (val !== "") {
    let classesArray = val.split(" ");

    for (let i = 0; i < classesArray.length; i++) {
      if (classesArray[i] !== "") {
        current.classList.remove(classesArray[i]);
      }
    }

    showClasses();
    remove.value = "";
  }
};

////////////////////////////////////////////////

//  task 3
let paragraph = document.querySelector("p");
paragraph.remove();

let start = document.createElement("div");
start.className = "start";
start.setAttribute("title", "Start Element");
start.setAttribute("data-value", "Start");
start.textContent = "Start";

let end = document.createElement("div");
end.className = "end";
end.setAttribute("title", "End Element");
end.setAttribute("data-value", "End");
end.textContent = "End";

let element = document.querySelector(".our-element");
element.before(start);
element.after(end);

//////////////////////////////////////////

// task 4
let div = document.querySelector("div");

let text = div.childNodes[2].textContent;

console.log(text); // Elzero

//////////////////////////////////////////

// task 5

document.onclick = function (e) {
  console.log(`This Is ${e.target.tagName}`);
};
