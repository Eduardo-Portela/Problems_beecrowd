const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const number = parseInt(lines.shift());

const result = ((number + 1) * (number + 2)) /2

console.log(result)