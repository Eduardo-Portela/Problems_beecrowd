const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines.map(Number)

let countGas = 0
let countAlc = 0
let countDisel = 0
let i = 0
do{
 if(values[i] === 1){
    countAlc++
 }else if(values[i] ===2){
    countGas++
 }else if(values[i] === 3){
    countDisel++
 }
i++
}while(values[i] !== 4)

console.log(`MUITO OBRIGADO
Alcool: ${countAlc}
Gasolina: ${countGas}
Diesel: ${countDisel}`)

