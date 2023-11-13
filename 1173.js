const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let value = Number(lines.shift())
let vetor = []
vetor.push(value)

for(let i = 0; i < 10; i++){
    vetor.push(vetor[i] * 2)
    console.log(`N[${i}] = ${vetor[i]}`)
}
