var cons = require('./6-cons.js');
var car  = require('./7-car.js');
var cdr  = require('./8-cdr.js');

function reduce(pair, f, s) {
    return typeof pair == "function" ?
           f(car(pair), reduce(cdr(pair), f, s)) :
           f(pair, s);
}

module.exports = reduce;
