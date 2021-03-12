function lineNumber(data) {
	let strArr = data.split(/\r?\n/);
	// let strArr = data.split('\n');
	// console.log(strArr);

	let lineNo = 0;
	for (let i = 0; i < strArr.length; i++) {
		console.log(++lineNo + '.' + strArr[i]);
	}

	return data;
}

module.exports = {
	lineNumberFn: lineNumber,
};
