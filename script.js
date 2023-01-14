// BMI Challenge
let massMark = 95;
let massJohn = 85;
let heightMark = 1.88;
let heightJohn = 1.76;

function bmiCalculator(mass, height) {
  return mass / height ** 2;
}

let bmiMark = bmiCalculator(massMark, heightMark);
let bmiJohn = bmiCalculator(massJohn, heightJohn);
if (bmiMark > bmiJohn) {
  console.log(`Mark(${bmiMark}) has higher BMI than John(${bmiJohn})`);
} else {
  console.log(`John(${bmiJohn}) has higher BMI than Mark(${bmiMark})`);
}
//Video 020 @ 00:00
