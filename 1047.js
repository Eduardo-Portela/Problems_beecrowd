const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines[0].split(' ').map(Number)

const [a, b, c, d] = values
let res = 0

if(a > c){
    res = (24 - a) + c
    console.log(`O JOGO DUROU ${res} HORA(S)`)
}else if( a === c){
    console.log("O JOGO DUROU 24 HORA(S)")
}else{
    res = c - a
    console.log(`O JOGO DUROU ${res} HORA(S)`)
}