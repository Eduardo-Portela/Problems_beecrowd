const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines.shift().split(" ").map(Number)

let [A, B, C] = values;

    while (A > 0) {
        console.log (Math.floor (Math.sqrt ((A * B * 100) / C)));
        [A, B, C] = lines.shift().split(" ").map(Number);
}