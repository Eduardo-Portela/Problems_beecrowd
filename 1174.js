const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let values = lines.map(Number)

for(let i = 0; i < values.length -1; i++){
    if(values[i] <= 10){
        console.log(`A[${i}] = ${values[i].toFixed(1)}`)
    }
}

