//  Anonymous Function and Use Cases
// 1. هنا محتاجين اسم عشان الفانكشن هتحسب في أكتير من مكان
// ينفع نناديها قبل ما نطبع
function sum(a, b) {
  return a + b;
}
console.log(sum(5, 10));
console.log(sum(20, 30));

// 2. هنا مش محتاجين اسم خالص، إحنا محتاجين حركة تنفذ أمر مع الضغط وخلاص
// هنا مينفعش لازم نعرفها الاول
// document.getElementById("btn").onclick = function () {
//   console.log("تم الضغط على الزرار!");
// };

// when it's one line
let print = (num1, num2) => num1 + num2;
console.log(print(10, 20));

console.log("*******************************");

// Global Scope: Variables declared outside any function or block, accessible from anywhere in the code.

// Local Scope: Variables declared inside a specific function or block, accessible only within that area.

// var: A function-scoped variable that ignores {} blocks and can be redeclared.

// let: A block-scoped variable that stays strictly inside {} blocks and cannot be redeclared in the same scope.

console.log("*******************************");

// Lexical Scope : هو إن الفانكشن بتشوف متغيرات الأب اللي بره لأنها اتكتبت جواه، بس الأب مبيشوفش متغيرات ابنها الداخلي

// Lexical Environment : لما يجي يدور على المتغير
// الـ Engine بيفتح الشنطة بتاعته الأولى، يقلب فيها:

// لقى الحجة؟ بيستخدمها وخلاص على كده.

// ملقهاش؟ بيشد "حبل التوصيل" (Outer Reference) عشان يروح للشنطة اللي بره يقلب فيها.. وهكذا

// Execution Context : بيتخلق مخصوص عشان يتنفذ جواه كود الفانكشن لما نناديها، وبيموت أول ما تخلص

// Scope Chain :  الطريق اللي الجافاسكريبت بتمشي فيها حلقة حلقة لبره علشان تلاقي المتغير

console.log("*******************************");

/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function () {
//   // Parameter ?
//   return "???";
// };

let names = (...names) => names;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

    let myNumbers = [20, 50, 10, 60];

var sum = 0;
let calc = (one, two, ...nums) => one + two + nums[0];


// function calc(one, two, ...nums) {
//     let sum = 0;
//     for(let i = 0; i<nums.length; i++){
//         sum += nums[i];
//     }
//     return one + two + sum ;
// }

console.log(calc(10, myNumbers[0], myNumbers[1])); // 80
