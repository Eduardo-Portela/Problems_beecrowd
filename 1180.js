const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const cases = Number(lines.shift())
const values = lines[0].split(' ').map(Number)
let minValue = values[0]
let pos = 0

for(let i = 0; i < cases; i++){
    if(values[i] < minValue){
        minValue = values[i]
        pos = i
    }
}

console.log(`Menor valor: ${minValue}
Posicao: ${pos}`)