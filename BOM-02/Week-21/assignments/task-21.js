// // task-2
// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "articles.json");
// myRequest.send();

// myRequest.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(this.responseText);
//   }
// };

// myRequest.onloadend = function () {
//   console.log("Data Loaded");
// };

// console.log("***********");

// myRequest.onreadystatechange = function(){
//     if(this.readyState === 4 && this.status === 200){
//         const mainData = JSON.parse(this.responseText)
//     for(let i = 0; i<mainData.lenght; i++){
//         mainData[i].category = "All"
//     }

//     console.log(mainData);
//     const updatedData = JSON.stringify(mainData)

//     console.log(updatedData);
    
//     }
// }
console.log("***********");

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const mainData = JSON.parse(this.responseText);

    let mainDiv = document.createElement("div");
    mainDiv.id = "data";

    for (let i = 0; i < mainData.length; i++) {
      let articleDiv = document.createElement("div");
      articleDiv.innerHTML = `
        <h2>${mainData[i].title}</h2>
        <p>${mainData[i].body}</p>
        <p>Author: ${mainData[i].author}</p>
        <p>Category: ${mainData[i].category}</p>
      `;

      mainDiv.appendChild(articleDiv);
    }

    document.body.appendChild(mainDiv);
  }
};


