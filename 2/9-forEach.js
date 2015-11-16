var car = require('./7-car.js');
var cdr = require('./8-cdr.js');

function forEach(pair, f) {
    if (typeof pair == "function")
    {
        f(car(pair));
        forEach(cdr(pair), f);
    }
    else
        f(pair);
}

module.exports = forEach;
