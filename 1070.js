const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let value = Number(lines.shift());

let count = 0

while(count < 6){
    if(value % 2 !== 0){
        console.log(value)
        count++
    }
    value++
}