let input = document.querySelector("#task-input");
let add = document.querySelector(".add");
let clear = document.querySelector(".clear");
let ul = document.querySelector("#tasks-list");
let counter = document.querySelector("#counter");

// فانكشن تحديث العداد
function updateCounter() {
  counter.textContent = `Tasks: ${ul.children.length}`;
}

// منع الـ Refresh
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
});

// 1. إضافة تاسك جديدة
add.onclick = function () {
  if (input.value.trim() === "") return;

  let list = document.createElement("li");

  let taskText = document.createElement("span");
  taskText.textContent = input.value;
  list.appendChild(taskText);

  let newRemove = document.createElement("button");
  newRemove.textContent = "Delete";

  newRemove.onclick = function (e) {
    e.stopPropagation();
    list.remove();
    updateCounter(); // تحديث العداد بعد المسح
  };

  list.onclick = function () {
    list.classList.toggle("completed");
  };

  list.appendChild(newRemove);
  ul.appendChild(list);

  input.value = "";
  updateCounter(); // تحديث العداد بعد الإضافة
};

// 2. زرار المسح الكلي
clear.onclick = function () {
  if (ul.children.length === 0) return;

  if (confirm("Are you sure you want to delete all tasks?")) {
    ul.innerHTML = "";
    updateCounter(); // تحديث العداد بعد المسح الكلي
  }
};