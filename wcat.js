let display = require('./cmd/display');
let displayMultiple = require('./cmd/displayMultiple');
let readLine = require('./util/readLine');
let lineBreak = require('./cmd/lineBreak');
let lineNumber = require('./cmd/lineNumber');
let lineNumberNonEmpty = require('./cmd/lineNumberNonEmpty');

let isFile = require('./util/isFile');

let help = require('./cmd/help');

let input = process.argv.slice(2);

if (input.length == 1) {
	if (input[0] == 'help') {
		help.helpFn();
	} else if (isFile.isFileFn(input[0])) {
		display.displayFn(input[0]);
	} else {
		isFile.notExistFn(input[0]);
	}
} else if (input.length > 1 && isFile.isFileFn(input[0])) {
	displayMultiple.displayMultipleFn(input);
} else if (input.length > 0) {
	let filePath = input[input.length - 1];

	if (isFile.isFileFn(filePath)) {
		let data = readLine.readLineFn(filePath);
		for (let i = 0; i < input.length - 1; i++) {
			if (
				(input[i] == '-n' && input[i + 1] == '-b') ||
				(input[i] == '-b' && input[i + 1] == '-n')
			) {
				if (input[i] == '-n') {
					lineNumber.lineNumberFn(data);
				} else {
					lineNumberNonEmpty.lineNumberNonEmptyFn(data);
				}
				return;
			} else if (input[i] == '-s') {
				lineBreak.lineBreakFn(data);
			} else if (input[i] == '-n') {
				lineNumber.lineNumberFn(data);
			} else if (input[i] == '-b') {
				lineNumberNonEmpty.lineNumberNonEmptyFn(data);
			}
		}
	} else {
		isFile.notExistFn(filePath);
	}
} else {
	console.log('Wrong Command. Type help to view the list of all the commands.');
}