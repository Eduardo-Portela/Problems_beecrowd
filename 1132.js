const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let n1 = Number(lines.shift())
let n2 = Number(lines.shift())
let aux = 0
if(n2 < n1){
    aux = n1
    n1 = n2
    n2 = aux
}

let sum = 0

for(let i = n1; i <= n2; i++){
    if (i % 13 !== 0){
        sum += i
    }
}

console.log(sum)