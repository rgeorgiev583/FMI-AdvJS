Array.prototype.myMap = function (f) {
    var mapped = [];
    this.forEach(function (item) { mapped.push(f(item)); });
    return mapped;
};
