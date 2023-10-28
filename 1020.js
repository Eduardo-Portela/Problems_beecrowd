const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let value = Number(lines.shift())

let countY = 0
let countM = 0
let countD = 0

while(value > 0){
if (value >= 365){
    countY += 1
    value -= 365
} else if (value >= 30){
    countM += 1
    value -= 30
}else {
    countD += value
    value -= countD
}
}
console.log(`${countY} ano(s)
${countM} mes(es)
${countD} dia(s)`)
