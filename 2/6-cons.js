function cons(a, b) {
    return function (f) { return f(a, b); }
}

module.exports = cons;
