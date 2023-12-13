const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const [a,b] = lines.shift().split(" ").map(Number)
console.log((b / (a+2)).toFixed(2))