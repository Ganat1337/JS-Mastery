// 1-what is BOM?
window.document.title = "BOM Mastery";

var myName = "Ganat";
console.log(window.myName); // هيطبع: Ganat
console.log("*************************");
/////////////////////////////////////////////

// 2-Alert, Confirm, Prompt
// let userDecision = prompt("Enter your age:")

// if (userDecision !== null && userDecision !== "") console.log(`your age is ${userDecision}`);
// else console.log("No age provided");
console.log("*************************");
/////////////////////////////////////////////

// 3-setTimeout and clearTimeout 
let sayHi = function(){console.log("Hi Gannat!");}
let time = setTimeout (sayHi , 5000)

let btn = document.querySelector("button")
btn.onclick = function(){clearTimeout(time)}

console.log("*************************");
/////////////////////////////////////////////

// 4-setInterval and clearInterval
    let counter = 5
function countdown(){ 
    counter -= 1
    console.log(counter);
    if(counter === 0){ clearInterval(set) } 
}
 let set = setInterval(countdown,1000)

console.log("*************************");
/////////////////////////////////////////////

