// Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
let new_array = arrays.reduce((arr, init) => {
    return arr.concat(init);
}, []);
console.log(new_array);
// → [1, 2, 3, 4, 5, 6]

// Your own loop
// Your code here.
function loop(value, test, update, body) {
    if (test(value)) {
	body(value);
	value = update(value);
	return loop(value, test, update, body);
    };
};

loop(200, n => n > 0, n => Math.floor(n / 1.21), console.log);

// Everything
function every(array, test) {
    // Your code here.
    for (let item of array) {
	if (!test(item)) return false;
    }
    return true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Dominant writing direction
require('./scripts.js');

function characterScript(code) {
    for (let script of SCRIPTS) {
	if (script.ranges.some(([from, to]) => {
	    return code >= from && code < to;
	})) {
	    return script;
	}
    }
    return null;
}

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
	let name = groupName(item);
	let known = counts.findIndex(c => c.name == name);
	if (known == -1) {
	    counts.push({name, count: 1});
	} else {
	    counts[known].count++;
	}
    }
    return counts;
}

function dominantDirection(text) {
    // Your code here.
    let scripts = countBy(text, char => {
	let script = characterScript(char.codePointAt(0));
	return script ? script.direction : "none";
    }).filter(({name}) => name != "none");

    let result;
    let total = scripts.reduce((n, {name, count}) => {
	if (count > n) {
	    result = name;
	    return count;
	};
    }, 0);
    if (total == 0) return "No scripts found";

    return result;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
