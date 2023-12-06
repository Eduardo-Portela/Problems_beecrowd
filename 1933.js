const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines.shift().split(" ").map(Number)
const max = Math.max(...values)

const card1 = values.shift()
const card2 = values.shift()

card1 === card2 ? console.log(card1) : console.log(max)
