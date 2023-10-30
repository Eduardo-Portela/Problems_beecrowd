const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines[0].split(' ').map(Number)

const [a, b, c, d] = values
let resH = 0
let resM = 0

if(a > c){
    resH = (24 - a) + c
}else if( a === c){
    resH = 24
}else{
    resH = c - a
}



if(b > d){
    resH = resH - 1
    resM = 60 - (b-d) 
    if(resH == 24 && (resM > 0)){
        resH = 0
    }
    console.log(`O JOGO DUROU ${resH} HORA(S) E ${resM} MINUTO(S)`)
}else if( b == d){
    
    resM = 0
    console.log(`O JOGO DUROU ${resH} HORA(S) E ${resM} MINUTO(S)`)
}else{
    resM = d - b
    if(resH == 24 && (resM > 0)){
        resH = 0
    }
    console.log(`O JOGO DUROU ${resH} HORA(S) E ${resM} MINUTO(S)`)
}
