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


// video 39 arrays
// video 40 arrays
// video 41 arrays coding challenge
function calcTip(bill) {
  if (bill <= 300 && bill >= 50) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}
const bill = [125, 555, 44];
const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
const total = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]];

console.log(bill);
console.log(tip);
console.log(total);


//video 42 DOM
//video 43 Dot and bracket notation
const jonas = {
  firstName: "Jonas",
  friends: ["Michael", "Victor", "Moses"],
  birthYear: 1991,
  job: "teacher",
  hasDriverLicense: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getsummary: function () {
    return `${this.firstName} is ${this.calcAge()}-years old ${
      jonas.job
    }, and he ${this.hasDriverLicense ? "a" : "no"} driver's license`;
  },
};
console.log(
  `${jonas["firstName"]} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
// video 44 object method
jonas.calcAge();
jonas.getsummary();
console.log(jonas.getsummary());
*/

// video 45 BMI challenge using objects

const markMiller = {
  fistName: "Mark",
  lastName: "Miller",
  height: 1.69,
  weight: 78,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};
const johnSmith = {
  fistName: "John",
  lastName: "Smith",
  height: 1.95,
  weight: 92,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

markMiller.calcBMI();
johnSmith.calcBMI();

function compare() {
  if (markMiller.bmi > johnSmith.bmi) {
    console.log(
      `${markMiller.fistName} ${markMiller.lastName} BMI ${markMiller.bmi} is higher than ${johnSmith.fistName} ${johnSmith.lastName} BMI ${johnSmith.bmi}`
    );
  } else {
    console.log(
      `${markMiller.fistName} ${markMiller.lastName} BMI ${markMiller.bmi} is lower than ${johnSmith.fistName} ${johnSmith.lastName} BMI ${johnSmith.bmi}`
    );
  }
}

compare();
