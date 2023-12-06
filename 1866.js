const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const cases = Number(lines.shift())

for(let i = 0; i < cases; i++){
    let currentValue = Number(lines.shift())

    currentValue % 2 === 0 ? console.log(0) : console.log(1) 
}