let testInput = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`;

let invalidIds  = [];
let answer      = 0;
let idAsString  = '';
let idSubString = '';
let testRepeat  = '';

testInput.split(',').forEach(function(range) {
	let idRange = range.split('-');

	for(let id = parseInt(idRange[0]); id<=parseInt(idRange[1]); id++) {
		idAsString  = id.toString();
		idSubString = '';
		testRepeat  = '';

		for(let i = 0; i<Math.floor(idAsString.length/2); i++) {
			idSubString = idAsString.substring(0,i + 1);

			if(idSubString+idSubString===idAsString) {
				invalidIds.push(idAsString);
				answer+=parseInt(idAsString);
			}
		}
	}
});

console.log(invalidIds);
console.log('Answer: ' + answer);
