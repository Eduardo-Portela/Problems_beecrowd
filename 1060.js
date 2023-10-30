const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines.map(Number)
let pos = 0

for(let i = 0; i < values.length; i++){
    if(values[i] > 0){
        pos +=1
    }
}
console.log(`${pos} valores positivos`)