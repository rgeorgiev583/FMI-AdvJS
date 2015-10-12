var fib = require('./1-fib.js');

function phiEstimation(n)
{
    return fib(n) / fib(n - 1);
}

module.exports = phiEstimation;
