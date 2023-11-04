const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let n = Number(lines.shift())

for(let i = (n-1); i > 0; i--){
    n *= i
}

console.log(n)