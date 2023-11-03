const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let n = Number(lines.shift())

let x = 2
let anterior = 0
let proximo = 1
let res = 0
let aux = 0 + " " + 1
while(x < n){
    res = anterior + proximo
    aux +=  " " + res.toString() 
    anterior = proximo
    proximo = res
    x++
}
console.log(aux)

