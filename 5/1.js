var stream = require('stream');
var util = require('util');
var EventEmitter = require('events').EventEmitter;

function FileReader() {
    stream.Writable.call(this);
    this.emitter = new EventEmitter();
}

util.inherits(FileReader, stream.Writable);

FileReader.prototype._write = function (chunk, encoding, done) {
    var newData = chunk.toString().split('\n');
    
    if (this.lastLine)
        this.buffer.push(this.lastLine + newData.shift());

    this.lastLine = newData[newData.length - 1]) ? newData.pop() : undefined;
    [].push.call(this.buffer, newData);
    done();
}

FileReader.prototype.fetchLine = function () {
    setTimeout(function () {
        if (this.buffer.length) {
            emitter.emit('next-line', { line: this.buffer.shift() });
        }
        else {
        }
    }, 0);
}
