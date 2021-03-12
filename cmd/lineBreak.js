function lineBreak(data) {
	// This basically looks for two line breaks with only whitespace in between. And then it replaces those by a single line break. Due to the global flag g, this is repeated for every possible match.

	data = data.replace(/\n\s*\n/g, '\n\n');
	console.log(data);

	return data;
}

module.exports = {
	lineBreakFn: lineBreak,
};
