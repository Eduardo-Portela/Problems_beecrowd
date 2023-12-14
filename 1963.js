const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const [oldPrice, newPrice] = lines.shift().split(" ").map(Number)

let dif = newPrice - oldPrice

let result = (dif / oldPrice) * 100

console.log(`${result.toFixed(2)}%`)