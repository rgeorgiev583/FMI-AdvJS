function countFive(gen) {
    var n = 0, nextNumber = function () {
        setTimeout(function() {
            if (n < 6) {
                return iterable.next(n++);
            }
        }, 0);
    }, iterable = gen(nextNumber);
    iterable.next();
}

countFive(function* (nextNumber) {
    while (true) {
        var num = yield nextNumber();
        console.log(num);
    }
}
