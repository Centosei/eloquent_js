// vector
// Your code here.
class Vec {
    constructor(x, y) {
	this.x = x;
	this.y = y;
    }

    plus(vec) {
	return new Vec(this.x + vec.x, this.y + vec.y);
    }

    minus(vec) {
	return new Vec(this.x - vec.x, this.y - vec.y);
    }

    get length() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

// Groups
class Group {
    // Your code here.
    constructor() {
	this.member = [];
    };

    add(num) {
	if (!this.member.includes(num)) {
	    this.member.push(num);
	}
    };
    delete(num) {
	if (this.member.includes(num)) {
	    this.member.splice(this.member.indexOf(num), 1);
	}
    };

    has(num) {
	if (this.member.includes(num)) return true;
	else return false;
    };

    static from(array) {
	let group = new Group();
	for (let num of array) {
	    group.add(num);
	};
	return group;
    };
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

// Iterable Groups
// Your code here (and the code from the previous exercise)
Group.prototype.get = function(x) { return this.member[x] };
Group.prototype.set = function(x, value) { this.member[x] = value };

class GroupIterator {
    constructor(group) {
	this.x = 0;
	this.group = group;
    }

    next() {
	if (this.x == this.group.member.length) return {done: true};

	let value = this.group.get(this.x);

	this.x++;
	
	return {value, done: false};
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
};

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c

// Borrowing a method

let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
