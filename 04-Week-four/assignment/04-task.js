                                            // task 1

console.log(1e5); // 100000
console.log(+"100000"); // 100000
console.log(parseInt("100000")); // 100000
console.log(Math.pow(10,5)); // 100000
console.log(Math.ceil(99999.9)); // 100000
console.log(Math.floor(100000.6)); // 100000
console.log(Math.round(100000.4)); // 100000
console.log(Math.trunc(100000.53354574)); // 100000
console.log(Number("100000")); // 100000
console.log(Math.abs(-100000)); // 100000 

                                            // task 2

console.log(Math.abs(Number.MIN_SAFE_INTEGER)); // 9007199254740991                                           
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991                                           

                                            // task 3

console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16

                                            // task 4

let myVar = "100.56789 Views";

console.log(Math.trunc(parseInt(myVar))); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

                                            // task 5

let num = 10;

console.log(Number.isInteger(num)+Number.isInteger(num)); // 2                                            

                                            // task 6

let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Number(flt.toFixed())); // 10
console.log(Math.trunc(flt)); // 10                                            

                                            // task 7

console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4