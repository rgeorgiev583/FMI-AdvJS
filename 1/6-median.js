function median(arr)
{
    var sortedArr = arr.sort();

    if (arr.length == 0)
        return undefined;

    return arr.length % 2 == 0 ?
            (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2 :
            arr[Math.floor(arr.length / 2)];
}

module.exports = median;
