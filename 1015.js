const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')


let timespend = Number(lines.shift())
let avgSpeed = Number(lines.shift())

let result = (timespend * avgSpeed)/12
console.log(result.toFixed(3))


