const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let value = Number(lines.shift());

for(let i = 1; i <= value; i++){
    if(i % 2 == 0){
        console.log(`${i}^2 = ${Math.pow(i, 2)}`)
    }
}