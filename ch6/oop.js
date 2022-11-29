let rabbit = {};
rabbit.speak = function(line) {
    console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.");

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
    "how late it's getting!");
hungryRabbit.speak("I could use a carrot right now.");

speak.call(hungryRabbit, "Burp!");

function normalize() {
    console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0, 2, 3], length: 5});

let empty = {};
console.log(empty.toString);
console.log(empty.toString());

console.log(Object.getPrototypeOf({}) ==
	    Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));
console.log(Object.getPrototypeOf(Math.max) ==
	    Function.prototype);
console.log(Object.getPrototypeOf([]) ==
	    Array.prototype);

let protoRabbit = {
    speak(line) {
	console.log(`The ${this.type} rabbit says '${line}'`);
    }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEE!");

function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

function Rabbit(type) {
    this.type = type;
}
Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");

console.log(Object.getPrototypeOf(Rabbit) ==
    Function.prototype);
console.log(Object.getPrototypeOf(weirdRabbit) ==
    Rabbit.prototype);

class Dog {
    constructor(type) {
	this.type = type;
    }
    speak(line) {
	console.log(`The ${this.type} dog says '${line}'`);
    }
}

let killerDog = new Dog("killer");
let blackDog = new Dog("black");

let object = new class { getWord() { return "hello"; } };
console.log(object.getWord());

Dog.prototype.teeth = "small";
console.log(killerDog.teeth);
killerDog.teeth = "long, sharp, and bloody";
console.log(killerDog.teeth);
console.log(blackDog.teeth);
console.log(Dog.prototype.teeth);

console.log(Array.prototype.toString ==
	    Object.prototype.toString);
console.log([1, 2].toString());
console.log(Object.prototype.toString.call([1, 2]));

// let ages = {
//     Boris: 39,
//     Liang: 22,
//     Julia: 62
// };
// console.log(`Julia is ${ages["Julia"]}`);
// console.log("Is Jack's age known?", "Jack" in ages);
// console.log("Is toString's age known?", "toString" in ages);

console.log("toString" in Object.create(null));

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Julia", 62);

console.log(`Julia is ${ages.get("Julia")}`);
console.log("Is Jack's age known?", ages.has("Jack"));
console.log(ages.has("toString"));

console.log({x: 1}.hasOwnProperty("x"));
console.log({x: 1}.hasOwnProperty("toString"));

Dog.prototype.toString = function() {
    return `a ${this.type} dog`;
};

console.log(String(blackDog));

let sym = Symbol("name");
console.log(sym == Symbol("name"));
Dog.prototype[sym] = 55;
console.log(blackDog[sym]);

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());
console.log([1, 2][toStringSymbol]());

let stringObject = {
    [toStringSymbol]() { return "a jute rope"; }
};
console.log(stringObject[toStringSymbol]());

let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());

class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
	this.width = width;
	this.height = height;
	this.content = [];

	for (let y = 0; y < height; y++) {
	    for (let x = 0; x < width; x++) {
		this.content[y * width + x] = element(x, y);
	    }
	}
    }

    get(x, y) {
	return this.content[y * this.width + x];
    }
    set(x, y, value) {
	this.content[y * this.width + x] = value;
    }
}

class MatrixIterator {
    constructor(matrix) {
	this.x = 0;
	this.y = 0;
	this.matrix = matrix;
    }

    next() {
	if (this.y == this.matrix.height) return {done: true};

	let value = {x: this.x,
		     y: this.y,
		     value: this.matrix.get(this.x, this.y)};
	this.x++;
	if (this.x == this.matrix.width) {
	    this.x = 0;
	    this.y++;
	}
	return {value, done: false};
    }
}

Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
};

let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
for (let {x, y, value} of matrix) {
    console.log(x, y, value);
}

let varyingSize = {
    get size() {
	return Math.floor(Math.random() * 100);
    }
};

class Temperature {
    constructor(celsius) {
	this.celsius = celsius;
    }
    get fahrenheit() {
	return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
	this.celsius = (value - 32) / 1.8;
    }

    static fromFahrenheit(value) {
	return new Temperature((value - 32) / 1.8);
    }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
temp.fahrenheit = 86;
console.log(temp.celsius);

class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
	super(size, size, (x, y) => {
	    if (x < y) return element(y, x);
	    else return element(x, y);
	});
    }

    set(x, y, value) {
	super.set(x, y, value);
	if (x != y) {
	    super.set(y, x, value);
	}
    }
}

matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2,3));

console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);
console.log(new SymmetricMatrix(2) instanceof Matrix);
console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
console.log([1] instanceof Array);
