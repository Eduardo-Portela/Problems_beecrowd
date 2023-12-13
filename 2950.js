const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const [n1,n2,n3] = lines.shift().split(" ").map(Number)

const result = n1 / (n2+n3)

console.log(result.toFixed(2))
