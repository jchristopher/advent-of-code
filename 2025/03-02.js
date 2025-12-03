let input = `987654321111111
811111111111119
234234234234278
818181911112111`;

let joltage = 0;

input.split("\n").forEach(function(bank) {
	let jolts = '';
	let batteryIdx = -1;
	let subsetMax = 0;

	for(let i = 12; i > 0; i--) {
		subsetMax = 0;
		batteryIdx++;
		for(let j = batteryIdx; j < bank.length - i + 1; j++) {
			if(bank[j] > subsetMax) {
				batteryIdx = j;
				subsetMax = bank[j];
			}
		}
		jolts += bank[batteryIdx].toString();
	}

	joltage += parseInt(jolts);
});

console.log('Answer: ' + joltage);
