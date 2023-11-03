const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let x = Number(lines.shift())
let zValues = lines.map(Number)
let z = 0
let count = 0
let total = 0

for(let i = 0; i < zValues.length; i++){
    if(zValues[i] > x){
        z = zValues[i]
        break
    }
}
while(total < z){
    x++
    total += x
    count++
}
console.log(count)