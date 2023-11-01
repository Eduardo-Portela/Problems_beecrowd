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

for(let i = n1+1; i <= n2; i++){
    if(i % 5 === 2 || i % 5 === 3){
        console.log(i)
    }
}