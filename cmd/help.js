function help() {
	console.log(
		`List of all commands : 
            1. node wcat.js <filepath> -> displays content of the file.
            2. node wcat.js <filepath1> <filepath2> <filepath3> ... -> displays content of all files in the given order.
            3. node wcat.js -s <filepath> -> converts big line breaks of the file into a singular line break
            4. node wcat -n <filepath> -> gives numbering to all the lines in that file
            5. node wcat -b <filepath> -> give numbering to non-empty lines in that file
            6. node wcat.js help -> displays the list of all commands
        `
	);
}

module.exports = {
	helpFn: help,
};
