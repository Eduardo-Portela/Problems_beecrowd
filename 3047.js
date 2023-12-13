const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const [M, A, B] = lines.map(Number)

let C = M - (A + B)
lines.push(C)
let newLines = lines.map(Number)
newLines.shift()
console.log(Math.max(...newLines))