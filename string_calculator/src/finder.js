// StringCalculator.js
function Finder() {}
Finder.prototype.find = function(map) {
	if (map === '') {
		return "Spaceship lost forever";
	}

	const rows = map.split('\n');
	for (let rowIndex = rows.length - 1; rowIndex >= 0; rowIndex--) {
		const index = rows[rowIndex].indexOf('X');
		if (index !== -1) {
			return `[${index}, ${rows.length - 1 - rowIndex}]`;
		}
	}
	return "Spaceship lost forever";

};
