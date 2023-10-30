const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines[0].split(' ').map(Number)

const [a,b,c] = values

let perimetro = a+b+c
let area = (a+b) * c/2

if ((a < (b+c)) && (b< (a+c)) && (c< (a+b))){
    console.log(`Perimetro = ${perimetro.toFixed(1)}`)
}else{
    console.log(`Area = ${area.toFixed(1)}`)
}