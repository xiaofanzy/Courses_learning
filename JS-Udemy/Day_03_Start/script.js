// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/* const x = 23;
console.log(1991); */

/* const calcTempAmplitude = function (temps) {
  let max = temps[0];
  for (let i = 1; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
  }
  console.log(`the max values is ${max}`);
};

calcTempAmplitude([1, 2, 3, 4]); */

// console.table(calcTempAmplitude([1, 2, 3]));

const forecast = [17, 21, 23];

const printForecast = function (fore) {
  for (let i = 0; i < fore.length; i++) {
    console.log(`${fore[i]} C in ${i + 1} days...`);
  }
};
console.log(printForecast(forecast));
