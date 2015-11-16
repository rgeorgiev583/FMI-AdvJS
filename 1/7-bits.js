function setBits(m, n, i, j)
{
    var mBits = [], nBits = [];

    while (m > 0)
    {
        mBits.unshift(m & 1);
        m >>= 1;
    }

    while (n > 0)
    {
        nBits.unshift(n & 1);
        n >>= 1;
    }

    mBits.slice(i, j + 1).forEach(function(elem, pos)
    {
        mBits[i + pos] = nBits[pos];
    });

    var mNew = 0, quot = 1, bit;

    while (bit = mBits.pop())
    {
        mNew += bit * quot;
        quot <<= 1;
    }
    
    return mNew;
}

module.exports = setBits;
