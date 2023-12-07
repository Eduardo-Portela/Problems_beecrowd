const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const typeOfTea = Number(lines.shift())

const values = lines.shift().split(" ").map(Number)

const result = values.filter((element) => element === typeOfTea)
console.log(result.length)