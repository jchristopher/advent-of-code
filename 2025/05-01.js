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

let fresh = [];
let available = [];

let ingredients = input.split("\n\n");

freshRanges = ingredients[0].split("\n");
available   = ingredients[1].split("\n");

function isIngredientFresh(id) {
	let fresh = false

	for (let i=0; i < freshRanges.length; i++) {
		let range = freshRanges[i].split('-');

		if (parseInt(id) >= range[0] && parseInt(id) <= range[1]) {
			fresh = true;
			break;
		}
	}

	return fresh;
}

availableFresh = available.filter((id) => isIngredientFresh(id));

console.log(availableFresh.length);
