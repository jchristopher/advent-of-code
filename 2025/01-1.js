let testInput = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;

// Dial starts at 50.
let dialPosition = 50;

// How many times the dial lands on zero.
let numZeroes = 0;

var moveDial = function(direction, distance) {
	for(let i = 0; i < distance; i++) {
		if('L'===direction) {
			dialPosition--;

			if(dialPosition<0) {
				dialPosition = 99;
			}
		} else {
			dialPosition++;

			if(dialPosition>99) {
				dialPosition = 0;
			}
		}
	}

	console.log('dial points to ' + dialPosition);

	if(dialPosition===0) {
		console.log(direction + distance);
		numZeroes++;
	}
}

var processSequence = function(input) {
	input.split("\n").forEach(function(movement) {
		const direction = movement[0];
		const distance  = parseInt(movement.substring(1));

		moveDial(direction, distance);
	});
}

processSequence(testInput);

console.log('dial position: ' + dialPosition);
console.log('answer: ' + numZeroes);
