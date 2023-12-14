const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const word = lines.shift()

const result = word.length >= 10 ? "palavrao" : "palavrinha"

console.log(result)