const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let value = 0
let sum = 0
let count = 0
    do{
       value = Number(lines.shift())
       if(value === 0){
        break
       }
while(count !== 5){
    if(value % 2 === 0){
        sum += value
        count++
    }
    value++
}
console.log(sum)
sum =0
count = 0
}while(value != 0)