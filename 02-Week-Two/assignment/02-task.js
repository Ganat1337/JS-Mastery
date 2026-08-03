//  Data Types And Variables
// task 1

let numberOne = "10";
let numberTwo = "20";

console.log(numberOne + numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo} `); // Template Literals Way => 1020
console.log(`${typeof (numberOne + numberTwo)}`); // Template Literals Way => String

console.log(numberTwo + "\n" + numberOne);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberTwo}
${numberOne} `);
/*
  Template Literals Way
  20
  10
*/

// ************************
// task 2

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

// ************************
// task 3

console.log(
  '`I\'m In\n\\\\\nLove \\\\ """ \'\'\'\n++ whith ++\n\\"""\\"""\n""JavaScript""`\` ',
);

// ************************
// task 4

let a = 21;
let b = 20;

let c = `${b}${a}`;

console.log(`_${a}_${c}_${c}_${c}_${b}_`); // _21_2021_2021_2021_20_

// ************************
// Variables And Concatenation Challenge
// ===========================================
// == Variables And Concatenation Challenge ==
// ===========================================

// [1] Create 3 Variables [Title, Desctiption, Date]
// -- All In One Statement
// -- Variable Name Must Be Two Words
// -- Title Content Is "Elzero"
// -- Description Content Is "Elzero Web School"
// -- Date Content Is "25/10"
// [2] Create Variable Contains Div And This Div Contains
// -- H3 For Title
// -- P For Paragraph
// -- Span For Time
// [3] Add This Card To Page 4 Times
// [4] Use Template Literals For Concatenate

// Extra
// - Use ES6 Repeat

// [1] Create 3 Variables In One Statement
let cardTitle = "Elzero",
    cardDescription = "Elzero Web School",
    cardDate = "25/10";

// [2] Create Variable Contains Div HTML
let cardContainer = `
  <div class="card">
    <h3>Hello ${cardTitle}</h3>
    <p>${cardDescription}</p>
    <span>${cardDate}</span>
  </div>
`;

// [3] & [4] & Extra: Add to page 4 times using repeat()
document.write(cardContainer.repeat(4));
