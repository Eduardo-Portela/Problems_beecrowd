const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const name = lines.shift()

let result = name.length > 80 ? "NO" : "YES"

console.log(result)