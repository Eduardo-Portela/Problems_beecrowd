const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const date = lines.shift().split("/")

const output1 = date[1] + "/" + date[0] + "/" + date[2]
const output2 = date[2] + "/" + date[1] + "/" + date[0]
const output3 = date[0] + "-" + date[1] + "-" + date[2]

console.log(output1)
console.log(output2)
console.log(output3)