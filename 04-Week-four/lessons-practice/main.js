                                        // Numbers
// js ignores "_" between numbers

                                        // Number Methods

console.log((100).toString());  // returns string                                      
// toFixed(); 

console.log(Number("100 Osama")); // returns NaN
console.log(+"100 Osama"); // returns NaN
console.log(parseInt("100 Osama")); // Analyses and returns int only without anything 
console.log(parseInt("Osama 100 Osama")); // not smart enough to return only int "return NaN"
console.log(parseInt("100.500 Osama")); // Analyses and returns int only without anything 
console.log(parseFloat("100.500 Osama")); // Analyses and return float

console.log(Number.isInteger("100")); // returns true or false

console.log(Number.isNaN("Osama")); //  عادي مش حاجه غريبه يعني 
console.log(Number.isNaN("Osama" / 20 )); //  this is actually NaN , we cant't devide string and num


                                        // Math Object
console.log("**************************");
//لو الرقم اقل من خمسه  كأنه مش موجود
//  لو الرقم من خمسه ل فوق هتزود العدد الصحيح 1
console.log(Math.round(99.2));
console.log(Math.round(99.5));
console.log("**************************");

console.log(Math.ceil(99.2)); // بيزود العدد الصحيح واحد حتى لو الرقم صغير
console.log(Math.floor(99.9)); // بيقلل 
console.log("**************************");

console.log(Math.min(10, 20, 100, -100, 90));
console.log(Math.max(10, 20, 100, -100, 90));
console.log("**************************");

console.log(Math.pow(2, 4));
console.log(Math.random());// returns random num every single time
console.log(Math.trunc(99.5)); // returns num without float
console.log("**************************");
// الفرق بينهم الارقام السالبه 
console.log(Math.trunc(99.5)); 
console.log(Math.floor(99.5)); 
console.log("**************************");

/*
  Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.min(a,b,c,d));
console.log("**************************");

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a,Math.trunc(d))); // 10000
console.log("**************************");

// Get Integer "2" From d Variable With 4 Methods
console.log(parseInt(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log("**************************");

// Use Variables b + d To Get This Valus
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round(Math.floor(b) / Math.ceil(d))); // 67 => Number
console.log("**************************");

                                        // String Methods Part 1

let theName = "Ganat";
// الفرق بينهم , ولكن في الموجب بيعملو نفس الحاجه
console.log(theName.charAt(-1)); // بيدينا: " " (ما بتفهمش السوالب) , مخصصه للسترينج بس   
console.log(theName[-1]);       // بيدينا: undefined               
console.log("**************************");

console.log(theName.length); // count everything even the space
console.log(theName.trim()); // remove the space
console.log("**************************");

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());
console.log("**************************");

                                        // String Methods Part 2
let z = "Elzero Web School";

console.log(z.indexOf("Web"));
console.log(z.indexOf("Web", 6)); // prints -1 if !found
console.log(z.indexOf("o")); // 5
console.log(z.lastIndexOf("o")); // 15
console.log("**************************");

// cuts
console.log(z.slice(2, 6));
console.log(z.slice(-5, -3));
console.log(z.repeat(5));
console.log("**************************");

console.log(z.split("",6));
console.log("**************************");

                                        // String Methods Part 2

let l = "Elzero Web School";

console.log(l.length);

console.log(l.substring(2, 6));    //(start,Not Including End)

console.log(l.substr(17));         //(start,include char)

console.log(l.includes("Web",4));  //(value,start)    

console.log(l.startsWith("E", 3)); //(value,start)

console.log(l.endsWith("o",6));    // (value,lenght)
console.log("**************************");

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let g = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(g.charAt(2).toUpperCase()+g.slice(3,7)); // Zero

// 8 H
console.log(g.slice(13,14).toLocaleUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(g.slice(0, 6).split()); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${g.substr(0,6)} ${g.substr(11)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(g.charAt(0).toLowerCase()+ g.slice(1, -1).toUpperCase()); // eLZERO WEB SCHOOl