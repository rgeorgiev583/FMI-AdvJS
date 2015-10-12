function fib(n)
{
    if (n < 2)
        return n;

    var a = 0, b = 1;

    for (var i = 0; i < n; i++)
    {
        a += b;
        var x = a;
        a = b;
        b = x;
    }

    return a;
}

module.exports = fib;
