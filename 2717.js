const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const minutes = Number(lines.shift())

const values = lines.shift().split(" ").map(Number)

const sumValues = values.reduce((initial, current) => initial + current)

const result = sumValues <= minutes ? "Farei hoje!" : "Deixa para amanha!"

console.log(result)