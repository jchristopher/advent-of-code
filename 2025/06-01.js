let input = `123 328  51 64
 45 64  387 23
  6 98  215 314
*   +   *   +  `;

let grandTotal = 0;
let problems   = [];

let i = 0;

input.split("\n").forEach(function(row) {
	let numbers = row.match(/\d+/mg);

	if (numbers && numbers.length) {
		for (let k=0; k<numbers.length; k++) {
			if (!problems[k]) {
				problems[k] = { operation:null, numbers:[] };
			}

			problems[k].numbers.push(numbers[k]);
		}
	} else {
		let operations = row.match(/\S{1,}/mg);

		for (let j=0; j<operations.length; j++) {
			problems[j].operation = operations[j];
		}
	}
});

problems.forEach(function(problem) {
	grandTotal += problem.numbers
		.map((num) => parseInt(num))
		.reduce(function(acc, curr) {
			return '+'===problem.operation ? acc + curr : acc * curr;
		}, '+'===problem.operation ? 0 : 1);
});

console.log(grandTotal);