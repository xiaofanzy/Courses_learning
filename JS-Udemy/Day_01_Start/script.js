/* let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");
console.log("hello");
console.log(123);

let firstName = "Bob";
console.log(firstName);

let myFristJob = "Projrammer";
let myCurrentJob = "Teacher"; */

/* let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log("Jonas");
console.log(23);

let year;
console.log(year);
console.log(typeof year);

year = 1991
console.log(typeof year);

console.log(typeof null); */

// let const var
// never used var
/* let lastName = "Pitter";
console.log(lastName);

const PI = 3.1415;
console.log(PI); */

// const 
/* const ageJonas = 2037 - 1991;
const ageSarah = 2037 - 2018;
console.log(ageJonas,ageSarah); 

// math
const now = 2037;
const ageTom = now - 1991;
const ageS = now - 2018;
console.log(ageTom,ageS);

// assigment operatior
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

// comparation operator
console.log(ageJonas > ageSarah);

const isFullAge = ageSarah <= 8; */

/* let markHeight = 78;
let markMass = 1.69;
let markBMI = markMass / (markHeight ** 2);
console.log(markBMI); 

let joanHeight = 92;
let joanMass = 1.95;
let joanBMI = joanMass / (joanHeight ** 2);
console.log(joanBMI);

console.log("compare: " + joanBMI > markBMI ); */

/* const firstName = "jonas";
const job = "teacher";
const year = 2037;
const birthyear = 1981;
const jonas = "i'm " + firstName + ",a " + (year - birthyear)
+  
  */

/* const age = 14;
const isOldEnough = age > 18;

if (isOldEnough) {
  //window + . 
  console.log("Sarah can start driving liscense 🚗");
} else{
  const yearLeft = 18 - age;
  console.log(`Salar is too young Wait another ${yearLeft} year;`);
}

const birthYear = 2012;
let century;
if(birthYear <=2000){
  century = 21;
}else{
  century = 22;
}

console.log(`${century}`); */

/* const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

// 强制类型转换
// + 号 会转换为String
console.log("i'am " + 23 + "years old");
// - * 都会把字符串转换为number
console.log('23' - '10' - 3);
console.log('23' * 2);
 */

/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean('Jonas'));
console.log(Boolean(''));

let height;
if(height){
  console.log('YAY,Height is defined!');
}else{
  console.log("height is UNDEFINED!");
} */

  // 尽量使用=== 而不是 ==
/* const age = 18;

if(age === 19){
  console.log(`The year is ${age}`);
}else if(age === '18'){
  console.log(`the year is ${age}`);
}else{
  console.log("others");
}
console.log(age); */

/* const hasDriverLiscense = true;
const hasGoodVision = true;
console.log(hasDriverLiscense && hasGoodVision);

const isTired = false; 

if(hasDriverLiscense && hasGoodVision && !isTired){
  console.log('Salar is able to drive');
}else{
  console.log('Salar is not able to drive');
} */


/* const day = prompt("what's the now days?");

switch (day) {
  case 'monday':
    console.log("Plan course structure");
    break;

  default:
    console.log("Ya not cool!");
    break;
} */

    
// 三目运算符
// const age = 23;
// age >=18 ? console.log("i like dirink wine 🎶") :
// console.log("i like drink water ⛏️");

// console.log(`i like drink ${age > 18 ? "wine" : "water"}`);

const bill = 275;
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill} the tip was ${tip} and the total value ${bill + tip}`);

