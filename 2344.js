const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const value = Number(lines.shift())

const valueLetter = value === 0  ? "E" : value > 0 && value <=35 ? "D"
: value > 35 && value <= 60 ? "C": value > 60 && value <=85 ? "B"
:"A"

console.log(valueLetter)