'use strict';

/* let hasDriverLiscense = false;
const passTest = true;

if(passTest) hasDriverLiscense = true;
if(hasDriverLiscense){
  console.log('I can drice :D');
} */

/* function logger() {
  console.log("My name is Jonas");
}

logger();


function fruitJuice(apples,oranges) {
  const juice = `the ${apples} and the ${oranges} has concat a water.`;
  return juice;
}

const appleJuice = fruitJuice(5,0);
console.log(appleJuice);
const appleOralgeJuice = fruitJuice(5,2);
console.log(appleOralgeJuice); */

// function declaration
/* function calcAge1(birthYear){
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// function expression
const calcAge2 = function (birthYear){
  return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1,age2); */

/* const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3); */

const calcAge4 = (birthYear,firstName) => {
  const retireYear = 65 - (2037 - birthYear);
  return `between ${retireYear} the ${firstName} is tired.`
}

const age4 = calcAge4(1991,'Jonas');
console.log(age4);