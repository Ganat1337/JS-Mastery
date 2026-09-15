// task 1
// *********************************************************

// task 2
let popup = function(){
    let btnClose = document.createElement("button")
    let div = document.createElement("div")
    div.innerHTML =  "<h1> Welcome </h1> <p> Welcome to my page </p>" 
    btnClose.textContent = "X"
    div.appendChild(btnClose)
    document.body.appendChild(div)

    btnClose.onclick = function(){
        div.remove()
    }
}
setTimeout(popup,5000)
// *********************************************************


// task 3 && task 4
let delete1 = setInterval(countdown,1000)
let counter = 6
function countdown(){
counter -= 1
console.log(counter)
if(counter === 0){ 
    clearInterval(delete1)
    window.open("https://google.com","_blank" ,"width=500,height=400,left=300" )
}
}

// task 5