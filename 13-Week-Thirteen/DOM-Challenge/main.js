document.body.style.cssText = "margin: 0; font-family: Arial, sans-serif;";

let div = document.createElement("div");
let header = document.createElement("header");
let logo = document.createElement("div");
logo.className = "logo";
let menu = document.createElement("ul");
let footer = document.createElement("footer");

let menuItem = ["Home", "About", "Service", "Contact"];

for (let i = 0; i < menuItem.length; i++) {
  let li = document.createElement("li");
  li.textContent = menuItem[i];
  li.style.display = "inline-block";
  li.style.marginRight = "15px";
  li.style.color = "#666";
  menu.appendChild(li);
}

let content = document.createElement("div");

for (let i = 1; i <= 15; i++) {
  let card = document.createElement("div");
  // 1. تنسيق الكارت
  card.innerHTML = `<span style="display: block; font-size: 22px; font-weight: bold; color: black; margin-bottom: 5px;">${i}</span> Product`;
  card.style.cssText = "background-color: white; padding: 20px; text-align: center; border: 1px solid #e2e2e2; border-radius: 6px; color: #888;";
  
  content.appendChild(card);
}

header.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 0 20px; background-color: white;";

logo.textContent = "Logo";
logo.style = "font-weight: bold; color: #23a96e; font-size: 20px;";

footer.textContent = "Copyright 2026";
footer.style.cssText = "background-color: #23a96e; color: white; text-align: center; padding: 20px; font-size: 18px;";

content.style.cssText = "display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; padding: 20px; background-color: #ececec; min-height: calc(100vh - 140px); box-sizing: border-box;";

header.appendChild(logo);
header.appendChild(menu);

div.appendChild(header);
div.appendChild(content);
div.appendChild(footer);

document.body.appendChild(div);