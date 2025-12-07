let input = `.......S.......
...............
.......^.......
...............
......^.^......
...............
.....^.^.^.....
...............
....^.^...^....
...............
...^.^...^.^...
...............
..^...^.....^..
...............
.^.^.^.^.^...^.
...............`;

let matrix = [];
let beams  = [];
let splits = 0;

input.split("\n").forEach(function(line) {
	matrix.push(line.split(''));
});

function findRowChars(rowIndex, char) {
	let rowChars = [];
	let row = matrix[rowIndex];

	for (let i=0; i<row.length; i++) {
		if (row[i]===char) {
			rowChars.push(i);
		}
	}

	return rowChars;
}

for (let y=0; y<matrix.length; y++) {
	let splitters = findRowChars(y,'^');
	let lastRowBeams = y>1 ? findRowChars(y-1,'|') : [];
	if (splitters.length) {
		// split the beams from above.
		splitters.forEach(function(splitterIndex) {
			matrix[y][splitterIndex-1] = '|';
			matrix[y][splitterIndex+1] = '|';

			if (matrix[y-1][splitterIndex]==='|') {
				splits++;
			}
		});

		lastRowBeams.forEach(function(beamIndex) {
			if ('^'!==matrix[y][beamIndex]) {
				matrix[y][beamIndex] = '|';
			}
		});
	} else {
		// continue beams from above.
		if (y===0) {
			// First row is N/A.
			continue;
		}
		if (y===1) {
			// Second row needs to handle starting beam.
			matrix[1][matrix[0].indexOf('S')] = '|';
			continue;
		}
		lastRowBeams.forEach(function(beamIndex) {
			matrix[y][beamIndex] = '|';
		});
	}
}

console.log(matrix.map((row) => row.join('')).join("\n"));
console.log('Final beams: ' + findRowChars(matrix.length-1,'|').length);
console.log('Splits: ' + splits);
