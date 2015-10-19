function sumSquaresOfOddArgs()
{
    return [].slice.call(arguments)
            .filter(function (value, index)
            {
                return index % 2 == 0;
            })
            .reduce(function (total, value)
            {
                return total + value * value;
            }, 0);
}

module.exports = sumSquaresOfOddArgs;
