function compose() {
    var fs = arguments;

    return function (arg) {
        return [].slice.call(fs).reduceRight(function (x, f) { return f(x); }, arg);
    }
}

module.exports = compose;
