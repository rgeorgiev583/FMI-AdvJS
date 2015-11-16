var cons = require('./6-cons.js');
var car  = require('./7-car.js');
var cdr  = require('./8-cdr.js');

function filter(pair, f) {
    if (typeof pair == "function")
    {
        var head = car(pair), tail = filter(cdr(pair), f);
        return f(head) ? cons(head, tail) : tail;
    }
    else if (f(pair))
        return pair;
}

module.exports = filter;
