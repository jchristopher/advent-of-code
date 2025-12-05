let input = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`;

let sections    = input.trim().split("\n\n");
let freshRanges = sections[0].trim().split("\n");

function groupRanges(ranges) {
	let parsed = ranges.map(line => {
	let [a, b] = line.split('-').map(Number);
		return [a, b];
	});

	parsed.sort((r1, r2) => r1[0] - r2[0]);

	let merged = [];

	for (let [start, end] of parsed) {
		if (!merged.length) {
			merged.push([start, end]);
			continue;
		}

		let last = merged[merged.length - 1];
		let [lastStart, lastEnd] = last;

		if (start <= lastEnd + 1) {
			last[1] = Math.max(lastEnd, end);
		} else {
			merged.push([start, end]);
		}
	}

	return merged;
}

let grouped = groupRanges(freshRanges);
let totalFresh = grouped.reduce((sum, [a, b]) => sum + (b - a + 1), 0);

console.log(grouped);
console.log(totalFresh);
