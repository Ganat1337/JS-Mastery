                                        // Arithmetic Operators

console.log(10 - "osama"); //NaN ---> not a num                                   
console.log(2 ** 4); // 2 power 4   
console.log("*****************");                                     

                                        // Unary Plus And Negation Operators
                                        // text to num 
console.log(+100);
console.log(+"100");
console.log(+null);
console.log("*****************");                                     

                                        // Negation Operators
                                        // ! --> change Boolean Value
let isLogged = true;
console.log(!isLogged); // false

                                        // !! --> change any value into Boolean
console.log(!!"Gannat"); // true (لأن النص المش فاضي يعتبر Truthy)
console.log(!!0);        // false (لأن الصفر يعتبر Falsy)
console.log("*****************");                                     

                                        // Unary Negation
                                        // taxt to num
                                        // change sign

console.log(-100);
console.log(-"100");
console.log(-"+100");
console.log(-null);
console.log(-false);
console.log(-true);
console.log(Number("100"));
console.log("*****************");                                     

                                        // Type Coercion
                                        // when JavaScript automatically converts a value from one data type to another (like text to a number).
let x = "5"; // String 
let y = 2;   // Number 

console.log(x + y); // "52" (String)    
console.log("*****************");                                     
