let input = `987654321111111
811111111111119
234234234234278
818181911112111`;

let joltage = 0;
let first   = '';
let second  = '';

input.split("\n").forEach(function(bank) {
	first = JSON.parse(JSON.stringify(bank))
		.split('')
		.slice(0,bank.length - 1)
		.sort((a,b) => parseInt(b) - parseInt(a))[0];

	second = JSON.parse(JSON.stringify(bank))
		.split('')
		.slice(bank.indexOf(first) + 1)
		.sort((a,b) => parseInt(b) - parseInt(a))[0];

	joltage += parseInt(first.toString() + second.toString());
});

console.log('Answer: ' + joltage);
