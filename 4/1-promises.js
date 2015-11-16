var fs = require('fs');

function* getFiles() {
    var first  = {filename: 'a', data: 'pesho'},
        second = {filename: 'b', data: 'gosho'},

    yield first;
    yield second;
    yield first;
    yield second;
}

function doFileOp(file, op) {
    return new Promise(function () {
        setTimeout(function (file) {
            resolve(op(file));
        }, 1000, file);
    })
}

function doFileIO() {
    var fileIter = getFiles(),
        write    = function (file) { fs.writeFile(file.filename, file.data) },
        read     = function (file) { return fs.readFile(file.filename) };

    Promise.all([
        doFileOp(fileIter.next().value, write),
        doFileOp(fileIter.next().value, write),
        doFileOp(fileIter.next().value, read),
        doFileOp(fileIter.next().value, read)
    ]).then(function (values) {
        doFileOp({
            filename: 'c',
            data:     values[2] + values[3]
        }, write);
    });
}

module.exports = doFileIO;
