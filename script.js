"use strict";

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");
 //Video 32

function logger(name) {
  // console.log(`my name is ${name}`);
}

logger("MOSES");
//Video 33

function calAge1(birthYeah) {
  return 2037 - birthYeah;
}
console.log(calAge1(1991));
//Video 34

//Video 35 arrow function
const calcage3 = (birthYeah) => 2037 - birthYeah;
console.log(calcage3(1992));
// video 36
*/
// video 38 function coding challenge

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
  } else if (avgKoalas * 2 <= avgDolphins) {
    console.log(`Koalas win ${avgDolphins} vs ${avgKoalas} `);
  } else {
    console.log("No teams wins..");
  }
}

checkWinner(avgDolphins, avgKoalas);
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);
