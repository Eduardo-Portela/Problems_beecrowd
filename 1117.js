const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines.map(Number)
let sum = 0
let count = 0

for(let i = 0; i < values.length; i++){
    if(values[i] < 0 || values[i] > 10){
        console.log("nota invalida")
    }else {
        count++
        sum+= values[i]
    }
    if(count == 2){
        break
    }
}
let media = sum/ count
console.log(`media = ${media.toFixed(2)}`)