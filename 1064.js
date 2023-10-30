const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines.map(Number)
let pos = 0
let sum =0
let avg = 0

for(let i = 0; i < values.length; i++){
    if(values[i] > 0){
        sum+= values[i]
        pos +=1
    }
}

avg = sum / pos
console.log(`${pos} valores positivos
${avg.toFixed(1)}`)