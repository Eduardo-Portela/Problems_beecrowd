const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split(' ')

let a = 0
let n = 0
let i = 1
let x = 0

a = Number(lines.shift());
n = Number(lines.shift());

while (n <= 0)
{
    i = i + 1; 
    n = Number(lines.shift());
}

for(let j = 0; j < n; j++) 
{
    x=(x+a+j);
}

console.log(x);