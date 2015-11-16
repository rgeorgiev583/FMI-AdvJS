function cdr(pair) {
    return pair(function (a, b) { return b; });
}

module.exports = cdr;
