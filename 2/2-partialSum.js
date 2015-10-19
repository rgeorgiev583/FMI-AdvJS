function partialSum(a, b)
{
    if (arguments.length == 0) {
        return 0;
    } else if (arguments.length == 1) {
        return function (b) { return a + b; };
    } else {
        return a + b;
    }
}

module.exports = partialSum;
