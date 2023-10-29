const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines[0].split(' ').map(Number)

const [a, b] = values
let total = 0
if(a == 1){
    total = b * 4
} else if(a == 2){
    total = b * 4.5
}else if(a == 3){
    total = b * 5
}else if(a == 4){
    total = b * 2
}else if(a == 5){
    total = b * 1.5
}


console.log(`Total: R$ ${total.toFixed(2)}`)