let input = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`;

let answer = 0;
let matrix = [];

input.split("\n").forEach(function(line) {
	matrix.push(line.split(''));
});

function removeRolls(matrix) {
	let removed = 0;
	for(let y=0; y < matrix.length; y++) {
		for(let x=0; x < matrix[y].length; x++) {
			if('@'!==matrix[y][x]) {
				continue;
			}

			let adjacentRolls = 0;

			// Above.
			if(matrix[y-1] && matrix[y-1][x] && '@'===matrix[y-1][x]) {
				adjacentRolls++;
			}

			// Above right.
			if(matrix[y-1] && matrix[y-1][x+1] && '@'===matrix[y-1][x+1]) {
				adjacentRolls++;
			}

			// Right.
			if(matrix[y][x+1] && '@'===matrix[y][x+1]) {
				adjacentRolls++;
			}

			// Below right.
			if(matrix[y+1] && matrix[y+1][x+1] && '@'===matrix[y+1][x+1]) {
				adjacentRolls++;
			}

			// Below.
			if(matrix[y+1] && matrix[y+1][x] && '@'===matrix[y+1][x]) {
				adjacentRolls++;
			}

			// Below Left.
			if(matrix[y+1] && matrix[y+1][x-1] && '@'===matrix[y+1][x-1]) {
				adjacentRolls++;
			}

			// Left.
			if(matrix[y][x-1] && '@'===matrix[y][x-1]) {
				adjacentRolls++;
			}

			// Above Left.
			if(matrix[y-1] && matrix[y-1][x-1] && '@'===matrix[y-1][x-1]) {
				adjacentRolls++;
			}

			if(adjacentRolls<4) {
				answer++;
				removed++;
				matrix[y][x] = '.';
			}
		}
	}

	if(removed>0) {
		removeRolls(matrix);
	}
}

removeRolls(matrix);
console.log(answer);
