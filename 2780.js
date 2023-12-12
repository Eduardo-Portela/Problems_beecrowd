const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let distance = Number(lines.shift())

let result = distance <= 800 ? "1": distance > 800 && distance<= 1400 ? "2" : "3"

console.log(result)