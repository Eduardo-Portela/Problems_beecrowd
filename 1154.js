const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let value = Number(lines.shift())
let sum = 0
let media = 0
let count = 0

while(value > 0){
    sum += value
    value = Number(lines.shift())
    count++
}

media = sum /count

console.log(media.toFixed(2))