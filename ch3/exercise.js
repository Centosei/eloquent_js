const min = function(x, y) {
    if (x > y) return y;
    else return x;
}

function isEven(number) {
    if (number < 2 && number >= 0)
    {
	if (number === 1) return false;
	else return true;
    } else {
	if (number < 0) return isEven(number + 2);
	else return isEven(number - 2);
    }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

function countBs(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++)
    {
	if (string[i] == "B") count++;
    }
    return count;
}

function countChar(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
	if (string[i] == char) count++;
    }
    return count;
}

console.log(countChar("Crippled Creek by Creedence Clearwater Revival", "C"));
console.log(countChar("Crippled Creek by Creedence Clearwater Revival", "e"));
