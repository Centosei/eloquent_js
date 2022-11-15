// Looping a Triangle
let pound = '#';

for (let i = 0; i < 7; i++)
{
    console.log(pound);
    pound += '#';
}

// FizzBuzz
for (let i = 1; i <= 100; i++)
{
    let string = '';

    if (i % 3 == 0)
	string += 'Fizz';
    if (i % 5 == 0)
	string += 'Buzz';

    if (string === '') console.log(i);
    else console.log(string);
}

// Chessboard
const prompt = require('prompt-sync')({ sigint: true});
const size = Number(prompt("choose the size of the board"));

for (let i = 0; i < size; i++)
{
    let raw = '';

    for (let j = (i % 2); j < (size + (i % 2)); j++)
    {
	if (j % 2 == 0)
	    raw += ' ';
	else
	    raw += '#';
    }

    raw += "\n";
    console.log(raw);
}

