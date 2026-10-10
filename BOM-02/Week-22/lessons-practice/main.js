// Promise Intro And Syntax
let myAge = 17;
const checkAge = new Promise((resolve, reject) => {
  if (myAge >= 18) resolve("Welcome!,You can enter");
  else reject(Error("Sorry,your age is not allowed"));
});
checkAge.then(
  (allowed) => console.log(`SUCCESS: ${allowed}`),
  (notAllowed) => console.log(`${notAllowed}`),
);
console.log("**********");

const myPromise = new Promise((resolveFunction, rejectFunction) => {
  let employees = ["Ahmed", "Sayed", "Mona"];

  if (employees.length === 4) {
    resolveFunction(employees);
  } else {
    rejectFunction(Error("Number Of Employees Is Not 4"));
  }
});

myPromise
  .then((resolveValue) => {
    resolveValue.length = 2;
    return resolveValue;
  })
  .then((resolveValue) => {
    resolveValue.length = 1;
    return resolveValue;
  })
  .then((resolveValue) => {
    console.log(`The Choosen Emplyee Is ${resolveValue}`);
  })
  .catch((rejectedReason) => console.log(rejectedReason))
  .finally(() => console.log("The Operation Is Done"));

console.log("**********");

const getPosts = (url) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No Data Found"));
      }
    };
    myRequest.open("GET", url);
    myRequest.send();
  });
};

getPosts("https://jsonplaceholder.typicode.com/posts")
  .then((result) => {
    result.length = 3;
    return result;
  })
  .then((result) => {
    console.log(result[1].title);
  })
  .catch((notDone) => {
    console.log(`${notDone}`);
  });

console.log("**********");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    data.length = 5;
    return data;
  })
  .then((result) => console.log(result[4].title))
  .catch((failed) => `opr failed :${failed}`);
console.log("**********");

// Promise.all() لما الكل ينجح ||	أول ما واحد بس يفشل
// Promise.allSettled() ديماً بتنجح وبترجع تقرير عن الكل ||	نادراً جداً
// Promise.race() لو أسرع واحد نجح. ||	لو أسرع واحد فشل

const p1 = new Promise((resolve) =>
  setTimeout(() => resolve("100 Users"), 1000),
);
const p2 = new Promise((_, reject) =>
  setTimeout(() => reject("Server 2 Offline"), 3000),
);
const p3 = new Promise((resolve) =>
  setTimeout(() => resolve("15 Products"), 2000),
);

Promise.allSettled([p1, p2, p3]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`),
);
console.log("**********");
async function age(old) {
  if (old >= 18) return "Welcome! You are eligible.";
  else throw new Error("Sorry, you are too young.");
}
age(19)
  .then((resolve) => console.log(resolve))
  .catch((rej) => console.log(rej.message));
console.log("**********");
