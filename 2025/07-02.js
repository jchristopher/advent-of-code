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
let timelines = [];

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

for (let t=0; t<matrix[0].length; t++) {
	timelines[t] = matrix[0][t]==='S' ? 1 : 0;
}

for (let y=0; y<matrix.length; y++) {
	let splitters = findRowChars(y,'^');
	let lastRowBeams = y>1 ? findRowChars(y-1,'|') : [];
	if (splitters.length) {
		// split the beams from above.
		splitters.forEach(function(splitterIndex) {
			if (matrix[y-1][splitterIndex]==='|') {
				splits++;

				timelines[splitterIndex-1]+=timelines[splitterIndex];
				timelines[splitterIndex+1]+=timelines[splitterIndex];
				timelines[splitterIndex] = 0;
			}

			matrix[y][splitterIndex-1] = '|';
			matrix[y][splitterIndex+1] = '|';
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
console.log(timelines);
console.log('Timelines: ' + timelines.reduce((acc, curr) => acc + curr, 0));
