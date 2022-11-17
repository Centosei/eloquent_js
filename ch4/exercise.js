// sum of a range
function exRange(start, end, step=1) {
    let array = [];
    let num = start;
    for (let i = 0; i <= Math.abs(start - end); i += Math.abs(step)) {
	array.push(num);
	num += step;
    }
    return array;
}

function exSum(numbers) {
    let sum = 0;
    for (let number of numbers) {
	sum += Number(number);
    }
    return sum;
}

console.log(exSum(exRange(1, 10)));

console.log(exRange(1, 10, 2));
console.log(exRange(5, 2, -1));

// reversing an array
function reverseArray(array) {
    let new_array = [];
    for (let item of array) {
	new_array.unshift(item);
    }
    return new_array;
}

function reverseArrayInPlace(array) {
    let new_array = reverseArray(array);
    for (let i = 0; i < array.length; i++) {
	array[i] = new_array[i];
    }
}

let example = [1, 2, 3, 4, 5];
reverseArrayInPlace(example);
console.log(example);

// A list
let list = {
    value: 1,
    rest: {
	value: 2,
	rest: {
	    value: 3,
	    rest: {
		value: 4,
		rest: null
	    }
	}
    }
};

function arrayToList(array) {
    function itemToValue(item) {
	return {value: item, rest: null};
    }
    let list = null;
    let len = array.length;
    for (let i = 0; i < len; i++) {
	let tmp_list = itemToValue(array.pop());
	tmp_list.rest = list;
	list = tmp_list;
    }
    return list;
}

function listToArray(list) {
    let array = [];
    function returnValue(value) {
	if (value.rest) {
	    array.push(value.value);
	    return returnValue(value.rest);
	} else {
	    array.push(value.value);
	    return null;
	}
    }
    returnValue(list);
    return array;
}

function append(element, list) {
    return {value: element, rest: list};
}

function nth(list, num) {
    let count = 0;
    function returnValue(list, num) {
	if (num == count) {
	    return list.value;
	} else if (list.rest == null) {
	    return undefined;
	} else {
	    count++;
	    return returnValue(list.rest, num);
	}
    }
    return returnValue(list, num);
}

let new_array = [2, 1, 5, 4, 2, 4, 3, 2];
let new_list = arrayToList(new_array);

new_list = append(12, new_list);

console.log(new_list);
console.log(listToArray(new_list));
console.log(nth(new_list, 1));

// deepEqual
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (typeof obj1 != "object" || typeof obj2 != "object" ||
	obj1 == null || obj2 == null)
	return false;
    for (let key of Object.keys(obj1)) {
	if (typeof obj1[key] == "object") {
	    return deepEqual(obj1[key], obj2[key]);
	} else {
	    if (obj1[key] != obj2[key]) return false;
	}
    }
    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
