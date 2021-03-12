let fs = require('fs');

function isFile(filePath) {

	return fs.existsSync(filePath);
}

function notExist(filePath) {
	let strArr = filePath.split('\\');
	let fileName = strArr.pop();

	console.log(fileName + " doesn't exist.");
}

module.exports = {
	isFileFn: isFile,
	notExistFn: notExist,
};
