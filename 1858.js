const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

var N = parseInt(lines.shift());
var T, menor = 21, posMenor = 0;
var ln = lines.shift().split(" ");

for (let i = 1; i <= N; i++) {
 
    T = parseInt(ln.shift());
    if (menor > T) 
    {
        menor = T;
        posMenor = i;
    } 
}

console.log(posMenor);