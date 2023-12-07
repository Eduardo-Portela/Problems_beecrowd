const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const [hotDogs, people] = lines.shift().split(" ").map(Number)

console.log((hotDogs / people).toFixed(2))