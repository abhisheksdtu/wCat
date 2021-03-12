let fs = require('fs');

let isFile=require('../util/isFile')

function display(filePath){
    if (isFile.isFileFn(filePath)) {
        // READ FILE
        fs.readFile(filePath, 'utf8', function fun(err, data) {
            if (err) {
                throw err;
            }
            console.log(data);
        });
        return true;
    } else {
        return false;
    }
}
module.exports = {
    displayFn:display
}
