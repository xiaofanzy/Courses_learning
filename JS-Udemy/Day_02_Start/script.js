"use strict";

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

/* const calcAge4 = (birthYear,firstName) => {
  const retireYear = 65 - (2037 - birthYear);
  return `between ${retireYear} the ${firstName} is tired.`
}

const age4 = calcAge4(1991,'Jonas');
console.log(age4); */

/* const calcAverage = (a,b,c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,64,49);
console.log(scoreDolphins,scoreKoalas);

const checkWinner = (dolpScore,kocaScore) =>{
  if(dolpScore >= 2 * kocaScore){
    console.log(`Dolphins win (${dolpScore} vs. ${kocaScore})`);
  } else if(kocaScore >= 2 * dolpScore){
    console.log(`Koalas win (${kocaScore} vs. ${dolpScore})`);
  } else{
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins,scoreKoalas); */

/* const friends = ['Michael','Steven','Peter'];

// add elementes
const newLength = friends.push("Jay"); // last
console.log(newLength);
console.log(friends);

friends.unshift('Joah');  // first
console.log(friends);

// delete elements
friends.pop();  // delete last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();  // delete first
console.log(friends); */
/* const bills = [125,155,44];
const calcTip = bill => bill >=50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
console.log((bills,tips)); */

/* const jonasObject = {
  firstName : "Tom",
  lastName : "Jone",
  birthYear : 1991,
  friends : ["Michels","Tom","Petter"],
  calcAge: function(){
    return 2037 - this.birthYear;
  },
  calcAge1 : function(){
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary : function(){
    return `${this.firstName} is a ${this.age} old teacher, and he has ${this.hasDriverLicense ? 'a' :"no"} driver's license.`;
  }
} */

// console.log(jonasObject.firstName);
// console.log(jonasObject['firstName']);

// const interestedIn = prompt("what do you want to konw about Jonas?");

// if(jonasObject[interestedIn]){
//   console.log(jonasObject[interestedIn]);
// }else{
//   console.log("that's wrong!");
// }

// add element
/* jonasObject.location = "hefei";
jonasObject['weibo'] = "凹脸的妖怪";
console.log(jonasObject);

console.log(`Jonas has ${jonasObject.friends.length} friends, and his best friend is called ${jonasObject.friends[0]}.`);

console.log(jonasObject.calcAge());
console.log(jonasObject['calcAge']());
console.log(jonasObject.calcAge1());
console.log(jonasObject.calcAge1());
console.log(jonasObject.calcAge1());
console.log(jonasObject.getSummary()); */

// const markObject = {
//   fullname :"Mark",
//   height : 1.95,
//   weight : 92,
//   MIB : this.height / this.weight,
//   calcBMI : function(){
//     this.BMI = this.weight / this.height ** 2;
//     return this.BMI;
//   },
//   getInfos : function(){
//     return `the ${this.fullname} is ${this.height} height and ${this.weight} weight,and the BMI is ${this.BMI}.`
//   }
// }

// const johnObject = {
//   fullname :"John",
//   height : 1.69,
//   weight : 78,
//   BMI : this.weight / this.height ** 2,
//   getInfos : function(){
//     return `the ${this.fullname} is ${this.height} height and ${this.weight} weight,and the BMI is ${this.BMI}.`
//   }
// }

// console.log(markObject.MIB);

// const winBMI = function(markBMI,johnBMI){
//   return markBMI > johnBMI ? " Mark Win ⭐" : "Joan Win ⛏️";
// }

// console.log(winBMI(markObject.BMI,johnObject.BMI));
// console.log(markObject.getInfos());

/* const years = [1991,2000,2001,2003];
const ages = [];

for (let i = 0; i < years.length; i++){
  ages.push(years[i]);
}
console.log(ages); */

/* const johnObject = {
  fullname: "John",
  height: 1.69,
  weight: 78,
  BMI: this.weight / this.height ** 2,
  getInfos: function () {
    return `the ${this.fullname} is ${this.height} height and ${this.weight} weight,and the BMI is ${this.BMI}.`;
  },
};

for(let exercise = 1;exercise < 4;exercise++){
  console.log(`----- starting exercise ${exercise} ------`);

  for(let pop = 1; pop < 6; pop++){
    console.log(`Lifting weight repetition ${pop}`);
  }
} */

/* let dice = Math.trunc(Math.random() * 6) + 1;

while(dice != 6){
  console.log(`you rolled the rice is ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
} */

const bills = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
const tips = [];
const totals = [];

for(let i = 0; i < bills.length; i++){
  let tip = bills[i] * 0.1;
  tips.push(tip);
  totals.push(tip + bills[i]);
}


