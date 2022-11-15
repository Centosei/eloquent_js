let mood = "light";
console.log(mood);

mood = "dark";
console.log(mood);

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);

let one = 1, two = 2;
console.log(one + two);

var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);

console.log(Math.max(2, 4));
console.log(Math.min(2, 4) + 100);

const prompt = require("prompt-sync")({ sigint: true });

let theNumber = Number(prompt("Pick a number: "));
if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " +
	theNumber * theNumber);
} else {
    console.log("Hey. Why didn't you give me a number?");
}

let num = Number(prompt("Pick a number: "));

if (num < 10) {
    console.log("Small");
} else if (num < 100) {
    console.log("Medium");
} else {
    console.log("Large");
}


