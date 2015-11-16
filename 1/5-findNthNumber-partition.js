function partition(arr)
{
    var lastIndex = arr.length - 1, pivot = arr[lastIndex], i = 0;
    arr.forEach(function(elem, j)
    {
        if (elem <= pivot && j < lastIndex)
        {
            var x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
            i++;
        }
    });
    var x = arr[i];
    arr[i] = arr[lastIndex];
    arr[lastIndex] = x;
    return i;
}

function findNthNumber(n, arr)
{
    return arr.sort(function(a, b)
    {
        if (a < b)
            return 1;

        if (a > b)
            return -1;

        return 0;
    })[n - 1];
}

module.exports = findNthNumber;
