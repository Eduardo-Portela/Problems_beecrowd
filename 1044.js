const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines[0].split(' ').map(Number)

const [a,b] = values

if(b % a === 0  || a % b === 0){
    console.log("Sao Multiplos")
}else{
    console.log("Nao sao Multiplos")
}