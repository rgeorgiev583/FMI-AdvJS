function car(pair) {
    return pair(function (a, b) { return a; });
}

module.exports = car;
