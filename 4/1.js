var fs = require('fs');

function* getFile() {
    var first  = {filename: "a", data: "pesho"},
        second = {filename: "b", data: "gosho"},
        third  = {filename: "c", data: "sasho"};

    yield first;
    yield second;
    yield first;
    yield second;
    yield third;
}

function doWrites(fileGen) {
    var file = fileGen.next().value;

    setTimeout(function (file) {
        fs.writeFile(file.filename, file.data, function (err) {
            var file = fileGen.next().value;

            setTimeout(function (file) {
                fs.writeFile(file.filename, file.data, function (err) {
                    var file = fileGen.next().value;

                    setTimeout(function (file) {
                        fs.readFile(file.filename, function (err, data) {
                            var file = fileGen.next().value, firstData = data;

                            setTimeout(function (file) {
                                fs.readFile(file.filename, function (err, data) {
                                    var file = fileGen.next().value, secondData = data;

                                    setTimeout(function (file) {
                                        fs.writeFile(file.filename, firstData + secondData);
                                    }, 1000, file);
                                });
                            }, 1000, file);
                        });
                    }, 1000, file);
                });
            }, 1000, file);
        });
    }, 1000, file);
}

module.exports = {getFile: getFile, doWrites: doWrites};
