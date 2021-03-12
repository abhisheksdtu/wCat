let fs = require('fs');

function readLine(filePath) {
	let data = fs.readFileSync(filePath, 'utf8');
	return data;
}

module.exports = {
	readLineFn: readLine,
};
