const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const cases = Number(lines.shift())
const values = lines.shift().split(" ").map(Number)

let first = 0
let count = 0

for(let i = 0; i < values.length; i++){
    if( i == 0){
        first = values[0]
    }else{
        if(first <= values[i]){
            first = values[i]
        }else{
            console.log(i + 1)
            count++
            break
        }
    }
}

if(count ==0){
    console.log(0)
}