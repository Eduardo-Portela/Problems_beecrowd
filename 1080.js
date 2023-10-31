const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines.map(Number)
const maxNumber = Math.max(...values)

for(let i = 0; i < values.length; i++){
    if(maxNumber === values[i]){
        console.log(`${maxNumber}
${i+1}`)
    }
}