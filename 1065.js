const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines.map(Number)

let res = 0
for(let i = 0; i <= 4; i++){
    console.log(values[i])
    if(values[i]% 2 == 0){
        res +=1
    }
}

console.log(`${res} valores pares`)