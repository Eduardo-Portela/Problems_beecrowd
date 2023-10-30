const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let value = Number(lines.shift());

let months = ["January", "February", "March", "April", "May",
 "June","July", "August", "September", "October", "November", "December"]

 console.log(months[value - 1])