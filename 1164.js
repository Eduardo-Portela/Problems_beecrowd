const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const cases = Number(lines.shift())

let value = Number(lines.shift())
let sum = 0

for(let j = 0; j < cases; j++){

    for(let i = 0; i < value; i++){
        if(value % i === 0){
            sum += i
        }

    }

    if(sum === value){
        console.log(`${value} eh perfeito`)
    }else{
        console.log(`${value} nao eh perfeito`) 
    }
    sum = 0
    value = Number(lines.shift())
}