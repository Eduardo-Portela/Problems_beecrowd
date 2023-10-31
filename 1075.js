const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let value = Number(lines.shift());

for(let i = 1; i < 10000; i++){
    if(i % value === 2){
        console.log(i)
    }
}