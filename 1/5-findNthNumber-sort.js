function findNthNumber(n, arr)
{
    return arr.sort(function compare(a, b)
    {
        if (a < b)
            return 1;

        if (a > b)
            return -1;

        return 0;
    })[n - 1];
}

module.exports = findNthNumber;
