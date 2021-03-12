function lineNumberNonEmpty(data) {
	let strArr = data.split(/\r?\n/);
	// let strArr = data.split('\n');

	// console.log(strArr);

	let lineNo = 0;
	for (let i = 0; i < strArr.length; i++) {
		if (strArr[i] !== '') {
			lineNo++;
			console.log(lineNo + '.' + strArr[i]);
		} else {
			console.log(strArr[i]);
		}
	}

	return data;
}

module.exports = {
	lineNumberNonEmptyFn: lineNumberNonEmpty,
};
