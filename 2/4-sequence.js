function sequence() {
    var fs = arguments;

    return function (arg) {
        return [].slice.call(fs).reduce(function (x, f) { return f(x); }, arg);
    }
}

module.exports = sequence;
