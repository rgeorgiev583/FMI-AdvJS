function curry(a) {
    return function () {
        if (arguments.length >= a.length) {
            return a.apply(this, arguments);
        } else {
            var args = [].slice.call(arguments);

            return function () {
                return a.apply(this, args.concat([].slice.call(arguments)));
            };
        }
    }
}

module.exports = curry;
