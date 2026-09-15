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

// 5-Window Location Object

// assign:(زرار Back شغال).

// replace:(زرار Back مش هيرجعك).

if(location.protocol !== "https:"){ console.log("Warning: Unsecure Connection");}
let href = function(){ location.href = "https://google.com" }
// let movetimer = setTimeout(href,5000)

let move = document.querySelector("#move")
let reload = document.querySelector("#reload")

move.onclick = function(){location.replace("[https://google.com](https://google.com)")}
reload.onclick = function(){location.reload("[https://google.com](https://google.com)")}

///////////////////////////////////////////////////////////

// 6-Window Open And Close
let pop = document.querySelector("#pop")
pop.onclick = function(){
    window.open("https://google.com","_blank" ,"width=500,height=400,left=300" )
}

/////////////////////////////////////////////////////////////

// 7-Window History Object

let backBtn = document.getElementById("backBtn")
let goTwoSteps = document.getElementById("goTwoSteps")

backBtn.onclick = function(){history.back()}
goTwoSteps.onclick = function(){history.go(-2)}

console.log(history);
