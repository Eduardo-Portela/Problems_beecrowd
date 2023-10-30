const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines.map(Number)

let even = 0
let odd = 0
let pos = 0
let neg = 0

for(let i = 0; i <=4; i++){
    if(values[i] % 2 == 0){
        even++
    }if(values[i] % 2 != 0){
        odd++
    }if(values[i] > 0){
        pos++
    }if(values[i] < 0) {
        neg++
    }
}

console.log(`${even} valor(es) par(es)
${odd} valor(es) impar(es)
${pos} valor(es) positivo(s)
${neg} valor(es) negativo(s)`)