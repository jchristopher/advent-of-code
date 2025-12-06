let input = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `;

let grandTotal = 0;
let problems   = [];
let problemidx = 0;

input = input.split("\n").map((line) => line.split('').reverse().join(''));

for (let y=0; y<input[0].length; y++) {
	let col = '';

	for (let x=0; x<input.length; x++) {
		col+=input[x][y];
	}

	col = col.trim();

	if (col.length==0) {
		problemidx++;
	} else {
		if(!problems[problemidx]) {
			problems[problemidx] = {
				operation: null,
				numbers: []
			};
		}
		problems[problemidx].numbers.push(col);
	}
}

problems.forEach(function(problem) {
	let lastNumber = problem.numbers[problem.numbers.length - 1];
	problem.operation = lastNumber[lastNumber.length - 1];

	problem.numbers[problem.numbers.length - 1] = lastNumber.substring(0, lastNumber.length - 1);
});

console.log(problems);

problems.forEach(function(problem) {
	grandTotal += problem.numbers
		.map((num) => parseInt(num))
		.reduce(function(acc, curr) {
			return '+'===problem.operation ? acc + curr : acc * curr;
		}, '+'===problem.operation ? 0 : 1);
});

console.log(grandTotal);