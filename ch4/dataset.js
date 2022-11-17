let listOfNumbers = [2, 3, 5, 7, 11, 8];
console.log(listOfNumbers[0]);
console.log(listOfNumbers["length"]);

let doh = "Doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
console.log(sequence.pop());
console.log(sequence);

let anObject = {left: 1, right: 2};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);
console.log(Object.keys({x: 0, y: 0, z: 2}));

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

const score = {visitors: 0, home: 0};
score.visitors = 1;

console.log(score);

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
	Math.sqrt((table[2] + table[3]) *
		  (table[0] + table[1]) *
		  (table[1] + table[3]) *
		  (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));

let todolist = [];
function remember(task) {
    todoList.push(task);
}
function getTask() {
    return todoList.shift();
}
function rememberUrgently(task) {
    todoList.unshift(task);
}

console.log([1, 2, 3, 2, 1].indexOf(2));
console.log([1, 2, 3, 2, 1].lastIndexOf(2));

console.log([0, 1, 2, 3, 4].slice(2, 4));
console.log([0, 1, 2, 3, 4].slice(2));

function remove(array, index) {
    return array.slice(0, index)
	.concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));

let kim = "kim";
kim.age = 88;
console.log(kim.age);

console.log("coconuts".slice(4, 7));
console.log("coconut".indexOf("n"));

console.log("one two three".indexOf("ee"));
console.log("   okay \n ".trim());
console.log(String(7).padStart(3, "0"));

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
console.log(words.join(". "));

console.log("LA".repeat(3));

let string = "abc";
console.log(string.length);
console.log(string[1]);

function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
	if (number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2));

let numbers = [5, 1, 7];
console.log(max(...numbers));

words = ["never", "fully"];
console.log(["will", ...words, "understand"]);

function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle),
	    y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(2));

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(Math.floor(Math.random() * 10));

function phi2([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) /
	Math.sqrt((n10 + n11) * (n00 + n01) *
		  (n01 + n11) * (n00 + n10));
}

let {name} = {name: "Faraji", age: 23};
console.log(name);

string = JSON.stringify({squirrel: false,
		         events: ["weekend"]});
console.log(string);
console.log(JSON.parse(string).events);
