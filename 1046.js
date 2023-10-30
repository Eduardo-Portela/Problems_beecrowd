const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines[0].split(' ').map(Number)

const [a,b] = values
let res = 0

if(a > b){
    res = (24 - a) + b
    console.log(`O JOGO DUROU ${res} HORA(S)`)
}else if( a === b){
    console.log("O JOGO DUROU 24 HORA(S)")
}else{
    res = b - a
    console.log(`O JOGO DUROU ${res} HORA(S)`)
}