var cons = require('./6-cons.js');
var car  = require('./7-car.js');
var cdr  = require('./8-cdr.js');

function map(pair, f) {
    return typeof pair == "function" ?
           cons(f(car(pair)), map(cdr(pair), f)) :
           f(pair);
}

module.exports = map;
