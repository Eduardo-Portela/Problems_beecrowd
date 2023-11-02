const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let value = Number(lines.shift())
let count = 1

for(let i = 1; count <= value; i++){
    console.log(`${i} ${Math.pow(i, 2)} ${Math.pow(i, 3)}`)
    console.log(`${i} ${(Math.pow(i, 2)+1)} ${(Math.pow(i, 3)+1)}`)
    count++
}