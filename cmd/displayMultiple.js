let display = require('./display');
let isFile = require('../util/isFile');

function displayMultiple(input) {
	for (let i = 0; i < input.length; i++) {
		let filePath = input[i];

		let a=display.displayFn(filePath);

		if (a == false) {
			isFile.notExistFn(input[i]);
		}
	}
}

module.exports = {
	displayMultipleFn: displayMultiple,
};
